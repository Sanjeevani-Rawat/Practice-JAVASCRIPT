/** 
 * Callback Hell
 * Pyramid of domm
 * Inversion of Control
*/

// bookHotel --> proceedPayment --> showBookingStatus --> updateBookingHistory

function bookHotel(){

}

function proceedPayment(){

}

function showBookingStatus(){

}

function updateBookingHistory(){

}


bookHotel(hotelId, function(){  // 1
    if (error){
        handleError
    }
    else {
        proceedToPayment(hotelId, function(){   //2
            if (error){
            handleError
            }
            else{
                showBookingStatus(function(){   //3
                    if (error){
                        handleError
                    }
                    else{
                        updateBookingHistory(function(){    //4
                            if(error){
                                handleError
                            }
                            else{
                                success
                            }
                        })
                    }
                })
            }
        })
    }
})