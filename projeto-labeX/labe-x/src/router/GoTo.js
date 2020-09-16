export const GoBack = (history) =>{
    history.GoBack();
};

export const GoToHomePage = (history) =>{
    history.push("/");
};

export const GoToLoginPage = (history) =>{
    history.push("/login");
};

export const GoToListTripsPage = (history, option) =>{
    const setOption = option ? option : "user";
    history.push(`/trips/${setOption}`);
};

export const GoToAddTripPage = (history) =>{
    history.push("/trips/create");
};

export const GoToTripDetailPage = (history, id) =>{
    const Id = id 
    history.push(`/trips/details/${Id}`);
};

export const GoToApplyToTripPage = (history) =>{
    history.push("/trips/details/apply");
};

