import { useEffect } from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("https://dummyapi.online/api/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data));
    }, []);

    const currentMovies = movies.slice(0, 10);

    return (
        <section className="my-20 flex flex-col items-center">
            <div className="text-white text-center space-y-1 border-b-2 pb-2 px-5">
                <h1 className="text-3xl font-bold">
                    Timeless Movie Collection
                </h1>
                <p className="text-[#737373] font-semibold w-96 ">
                    Browse a curated collection of iconic movies and discover
                    timeless cinematic gems.
                </p>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table-auto w-full border-collapse border border-gray-600">
                    <thead>
                        <tr>
                            <th className="border border-gray-600 px-4 py-2 text-white">
                                #
                            </th>
                            <th className="border border-gray-600 px-4 py-2 text-white">
                                Title
                            </th>
                            <th className="border border-gray-600 px-4 py-2 text-white">
                                Rating
                            </th>
                            <th className="border border-gray-600 px-4 py-2 text-white">
                                IMDb
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentMovies.map((movie, index) => (
                            <tr
                                key={movie.id}
                                className="bg-[#0a181a] hover:bg-[#122426]"
                            >
                                <td className="border border-gray-600 px-4 py-2 text-gray-300">
                                    {index + 1}
                                </td>
                                <td className="border border-gray-600 px-4 py-2 text-gray-300">
                                    {movie.movie}
                                </td>
                                <td className="border border-gray-600 px-4 py-2 text-gray-300">
                                    ⭐ {movie.rating}/10
                                </td>
                                <td className="border border-gray-600 px-4 py-2">
                                    <a
                                        href={movie.imdb_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline"
                                    >
                                        IMDb Link
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Pagination */}
                <div className="flex justify-between mt-5 px-2">
                    <div>
                        <div className="border-2 border-gray-600 text-gray-300 p-2 rounded-md">
                            <FaArrowLeft />
                        </div>
                    </div>
                    <div>
                        <div className="border-2 border-gray-600 text-gray-300 p-2 rounded-md">
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Movies;
