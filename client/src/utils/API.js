import axios from "axios";

export default {

   // Authentication methods
   // ===============================================
   deleteTrip: function(trip){
      return axios.get("/api/calendar/delete", trip);
   },

   getTrips: function() {
      return axios.get("/api/calendar/populated");
   },
   getOneTrip: function(){
      return axios.get("/api/calendar/trip");
   },
   saveTrip: function (trip){
      console.log(trip)
      return axios.post("/api/calendar/add", trip);
   },

   getUser: function () {
      return axios.get("/auth/user");
   },

   logout: function () {
      return axios.get("/auth/logout")
   }

};