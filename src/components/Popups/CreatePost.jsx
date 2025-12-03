import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFileImport } from "react-icons/fa";
import InputField from "../ButtonsAndInput/InputField";
import axios from "axios";

function CreatePost() {
    const [previewImages, setPreviewImages] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm();

    const images = watch("images");

    useEffect(() => {
        if (images && images.length > 0) {
            const previews = Array.from(images).map(file => URL.createObjectURL(file));
            setPreviewImages(previews);
        }
    }, [images]);

    const addPostFunction = async (data) => {
        try {
            const formData = new FormData();

            formData.append("content", data.content);

            if (data.images && data.images.length > 0) {
                for (let i = 0; i < data.images.length; i++) {
                    formData.append("images", data.images[i]);
                }
            }
            const token = localStorage.getItem("acceasToken");
            const response = await axios.post("http://localhost:3317/api/v1/post", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const result = await response.json();
            alert("Post created successfully!");

            reset();
            setPreviewImages([]);
        } catch (error) {
            alert("Failed to create post.");
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-3xl font-bold text-center mb-6">Create Post</h2>

                <form onSubmit={handleSubmit(addPostFunction)} className="space-y-6">

                    <div>
                        <textarea
                            rows={4}
                            placeholder="What's on your mind?"
                            className="w-full border border-gray-300 rounded-xl py-3 px-4 focus:ring-red-600 focus:border-red-600 outline-none"
                            {...register("content", {
                                required: "Content is required",
                            })}
                        />
                        {errors.content && (
                            <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-lg font-semibold mb-2">
                            Upload Images
                        </label>
                        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl py-10 px-4 cursor-pointer hover:bg-gray-50 transition">
                            <FaFileImport size={45} className="text-gray-500 mb-3" />
                            <span className="text-gray-600 font-medium">
                                Click to upload images
                            </span>

                            <InputField
                                type="file"
                                multiple
                                className="hidden"
                                {...register("images")}
                            />
                        </label>

                        {previewImages.length > 0 && (
                            <div className="grid grid-cols-3 gap-3 mt-4">
                                {previewImages.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        className="w-full h-28 object-cover rounded-xl border"
                                        alt="preview"
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-lg font-semibold shadow-md transition"
                    >
                        Create Post
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;