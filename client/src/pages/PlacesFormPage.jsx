import React, { useState } from "react";
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";

const PlacesFormPage = () => {
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState("");
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [maxGuests, setMaxGuests] = useState(1);

    const inputHeader = (text) => {
        return <h2 className="text-2xl mt-4">{text}</h2>;
    };

    const inputDescription = (text) => {
        return <p className="text-gray-500 text-sm">{text}</p>;
    };

    const preInput = (header, description) => {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    };

	const addNewPlace = async (e) => {
        e.preventDefault();
        await axios.post("/places", {
            title,
            address,
            addedPhotos,
            description,
            perks,
            extraInfo,
            checkIn,
            checkOut,
            maxGuests,
        });
    };

    return (
        <>
            <div>
                <form onSubmit={addNewPlace}>
                    {preInput(
                        "Title",
                        "Title for your place, should be short and catchy as in advertisement"
                    )}
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title, for example: My lovely apartment"
                    />
                    {preInput("Address", "Address to this place")}
                    <input
                        type="text"
                        placeholder="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {preInput("Photos", "More = better")}
                    <PhotosUploader
                        addedPhotos={addedPhotos}
                        onChange={setAddedPhotos}
                    />
                    {preInput("Description", "Description of the place")}

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {preInput("Perks", "Select all the perks of your place")}
                    <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ">
                        <Perks selected={perks} onChange={setPerks} />
                    </div>

                    {preInput("Extra info", "House rules, etc")}

                    <textarea
                        value={extraInfo}
                        onChange={(e) => setExtraInfo(e.target.value)}
                    />
                    {preInput(
                        "Check in & out time",
                        "Add check in and out times, remember to have sometimes window for cleaning between guests"
                    )}

                    <div className="grid gap-2 sm:grid-cols-3">
                        <div>
                            <h3 className="mt-2 -mb-1">Check in time</h3>
                            <input
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                type="text"
                                placeholder="14:00"
                            />
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">Check out time</h3>
                            <input
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                type="text"
                                placeholder="11:00"
                            />
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">Max number of guests</h3>
                            <input
                                value={maxGuests}
                                onChange={(e) => setMaxGuests(e.target.value)}
                                type="number"
                            />
                        </div>
                    </div>
                    <button className="primary my-4">Save</button>
                </form>
            </div>
        </>
    );
};

export default PlacesFormPage;
