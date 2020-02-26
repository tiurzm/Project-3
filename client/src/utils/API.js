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
   
   saveTrip: function (trip){
      return axios.post("/api/calendar/add", trip);
   },

   getUser: function () {
      return axios.get("/auth/user");
   },

   getAllUsers: function () {
      return axios.get("/api/users")
   },
   logout: function () {
      return axios.get("/auth/logout")
   }

};