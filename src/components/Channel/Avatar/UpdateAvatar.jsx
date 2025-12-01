import React, { useEffect, useState } from 'react'
import SpinLoader from '../../Loaders/SpinLoader';
import { useForm } from 'react-hook-form';

function UpdateAvatar({avatar}) {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue
    } = useForm();

    const bannerFile = watch("avatar");
    const preview = bannerFile && bannerFile.length > 0
        ? URL.createObjectURL(bannerFile[0])
        : avatar || null;

    const updateAvatarFunction = async (data) => {
        try {
            setLoading(true)
            if (data?.banner.length > 0) {
                const formdata = new FormData();
                formdata.append("avatar", data.banner[0]);
                const token = localStorage.getItem("acceasToken")

                const resurl = await axios.put(`http://localhost:3317/api/v1/channel/avatar/${selectedVideo._id}`, formdata, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    }
                })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            closePopup();
        }
    }

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4"><SpinLoader></SpinLoader></div>
    }

    const inputStyles = `w-full border border-gray-300 rounded-xl py-2 px-3 focus:ring-red-600 focus:border-red-600 outline-none`;
    return (
        <div className="bg-white w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 py-2 gap-10">
            <div className="flex flex-col items-center text-center w-full lg:w-1/2 px-5">
                <img src="/youtube.png" className="h-14 w-16 mb-4" alt="youtube-logo" />
                <h2 className="text-4xl md:text-5xl font-semibold mb-4">Update avatar image</h2>
                <p className="text-lg text-gray-600 font-medium">Selct new avatar to update</p>
            </div>

            <form
                onSubmit={handleSubmit(updateAvatarFunction)}
                className="w-full lg:w-1/2 max-w-xl bg-gray-50 p-4 rounded-2xl shadow-md space-y-4 overflow-y-auto"
            >
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={preview || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdV6jxuuHsH1qvI_PEJ0oife4h5w8bOWVPA&s"}
                        alt="thumbnail-preview"
                        className="h-28 w-56 rounded-md shadow-sm object-cover"
                    />

                    <label className="flex flex-col items-center cursor-pointer w-40 px-2 py-2 hover:bg-blue-100 rounded-full">
                        <input
                            type="file"
                            accept="image/png, image/jpg, image/jpeg, image/gif"
                            className="hidden"
                            {...register("avatar")}
                        />
                        <span className="text-blue-700 text-lg font-semibold text-center">Select avatar</span>
                    </label>
                </div>

                <button
                    type="submit"
                    className={"w-full py-3 rounded-full text-lg cursor-pointer bg-gray-100 hover:bg-gray-200"}
                >
                    Update
                </button>
            </form>
        </div>
    )
}

export default UpdateAvatar