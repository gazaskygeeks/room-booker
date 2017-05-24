
const setToRightKeys = ({Eea, Paa,U3,ofa,wea},access_token)=>
  ({
    'id': Eea,
    'icon': Paa,
    'email': U3,
    'firstName': ofa,
    'lastName': wea,
    'accessToken':access_token
  });
const checkEventAvailability = (roomEvents,eventStartAt,eventEndAt) => {
  const startTime = new Date(eventStartAt).getTime();
  const endTime = new Date(eventEndAt).getTime();

  if(startTime > (new Date().getTime())){
    const events = roomEvents.filter(elem =>
    (startTime < elem.end.getTime() && endTime > elem.start.getTime())
  );
    if(events.length > 0){
      return false;
    }
    else {
      return true;
    }
  }
  else {
    return false ;
  }
};
export {setToRightKeys ,checkEventAvailability};
