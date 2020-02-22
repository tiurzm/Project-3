import axios from "axios";

export default {

   // Authentication methods
   // ===============================================
   deleteTrip: function(){
      return axios.get("/api/calendar/delete");
   },

   getTrips: function() {
      return axios.get("/api/calendar/populated");
   },
   
   saveTrip: function (trip){
      return axios.post("/api/calendar/add", trip);
   },

   getUser: function () {
      return axios.get("/auth/user");
   },

   logout: function () {
      return axios("/auth/logout");
   }

};