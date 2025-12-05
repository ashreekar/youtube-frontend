import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import InputField from '../ButtonsAndInput/InputField';
import SpinLoader from '../Loaders/SpinLoader';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ErrorFallback from '../ErrorBoundary/ErrorFallback';

// This compoenent updates the channel info like handle and description and name
function CustomizeChannel() {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [thumnail, setThumbnail] = useState(null);
    const [name, setName] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        defaultValues: {
            channelName: user?.fullName || "",
            handle: user?.username || "",
        },
    });

    // if user not have channel then can't acceas this route
    useEffect(() => {
        if (!(user?.user?.channel?.length > 0)) {
            navigate('/');
        }
    }, [])

    // fetching channel deatils if user have one
    useEffect(() => {
        async function fetchChannelDetails() {
            try {
                setLoading(true)
                const token = localStorage.getItem("acceasToken")
                if (!token || token.trim() === "") {
                    console.log("Not logged in")
                    return navigate('/');
                }
                const res = await axios.get("http://localhost:3317/api/v1/channel", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                //  setvalue to pre setting values so the backend not hits with empty values
                setThumbnail(res.data.data.meta.avatar);
                setName(res.data.data.meta.name);
                setValue("channelName", res.data.data.meta.name);
                setValue("handle", res.data.data.meta.handle);
                setValue("description", res.data.data.meta?.description);

            } catch (error) {
                return <ErrorFallback />
            } finally {
                setLoading(false)
            }
        }

        fetchChannelDetails();
    }, [])

    const updateAChannel = async (data) => {
        try {
            setLoading(true);
            // payload to update the channel
            const payload = {
                "description": data?.description.trim() || "",
                "name": data.channelName,
                "handle": data.handle
            }

            const token = localStorage.getItem("acceasToken")
            if (!token || token.trim() === "") {
                console.log("Not logged in")
                return navigate('/');
            }

            const result = await axios.put("http://localhost:3317/api/v1/channel", payload,
                {
                    headers: { "Authorization": `Bearer ${token}` }
                }
            )
            if (result) {
                navigate('/feed/you')
            }
        } catch (error) {
            setError(error.response.data.message)
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4"><SpinLoader></SpinLoader></div>

    }

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full py-4 px-4 rounded-2xl">
            <div className="flex flex-col items-center text-center w-full lg:w-1/2 px-5">
                <h2 className="text-4xl md:text-5xl font-semibold mb-4">Update your channel</h2>
                <img
                    src={thumnail || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdV6jxuuHsH1qvI_PEJ0oife4h5w8bOWVPA&s"}
                    alt="thumbnail"
                    className="h-46 w-46 mt-6 rounded-full shadow-sm object-cover"
                />
                <p className="text-lg text-gray-600 font-medium mt-6">Hello {name}</p>


            </div>

            {
                error && <p className='text-red-400 text-lg'>{error}</p>
            }

            <div className="w-full lg:w-1/2 max-w-xl bg-white rounded-2xlpx-6 py-4 md:px-10 md:py-10 rounded-2xl">
                {/* form to handle the update channel */}
                <form
                    onSubmit={handleSubmit(updateAChannel)}
                    className="mt-8 flex flex-col gap-5"
                >
                    <div className="flex flex-col gap-1">
                        <label className="font-medium text-gray-700">Name</label>
                        <InputField
                            type="text"
                            className="border border-gray-300 px-4 py-2 w-full rounded-lg focus:border-2 focus:border-blue-600"
                            placeholder="Enter channel name"
                            {...register("channelName", {
                                required: "Channel name is required",
                            })}
                        />
                        {errors.channelName && (
                            <p className="text-red-500 text-sm">
                                {errors.channelName.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-medium text-gray-700">Handle</label>
                        <InputField
                            type="text"
                            className="border border-gray-300 px-4 py-2 w-full rounded-lg focus:border-2 focus:border-blue-600"
                            placeholder="@example"
                            {...register("handle", {
                                required: "Handle name is required",
                            })}
                        />
                        {errors.handle && (
                            <p className="text-red-500 text-sm">{errors.handle.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-medium text-gray-700">Description</label>
                        <textarea
                            type="text"
                            className="border border-gray-300 px-4 py-2 w-full rounded-lg focus:border-2 focus:border-blue-600"
                            placeholder="description"
                            {...register("description")}
                        />
                    </div>

                    <div className="flex justify-end gap-4 mt-6">
                        <Link to={'/feed/you'}
                            type="button"
                            className="px-5 py-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
                        >
                            Cancel
                        </Link>

                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white font-medium cursor-pointer rounded-full hover:bg-blue-700 transition"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CustomizeChannel