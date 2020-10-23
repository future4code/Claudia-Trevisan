
export const goBack = (history) =>{
    history.goBack();
};

export const goToHomePage = (history) =>{
    history.push("/");
};

export const goToLoginPage = (history) =>{
    history.push("/login");
};

export const goToListTripsPage = (history, option) =>{
    history.push(`/trips/${option}`);
};

export const goToAddTripPage = (history, difer) =>{
    history.push(`/trips/create/${difer}`);
};

export const goToTripDetailPage = (history, idTripDetail) =>{
    history.push(`/trips/details/${idTripDetail}`);
};

export const goToApplyToTripPage = (history, idTrip) =>{
    history.push(`/trips/apply/${idTrip}`);
};

