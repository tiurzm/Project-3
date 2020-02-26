import axios from "axios";

export default {

   // Authentication methods
   // ===============================================
   deleteTrip: function(id){
      return axios.get(`/api/calendar/delete/${id}`);
   },

   getTrips: function() {
      return axios.get("/api/calendar/populated");
   },
   getOneTrip: function(id){
      return axios.get(`/api/calendar/trip/${id}`);
   },
   saveTrip: function (trip){
      console.log(trip)
      return axios.post("/api/calendar/add", trip);
   },
   update: function (id){
      return axios.post(`/api/calendar/update/${id}`)
   },

   getUser: function () {
      return axios.get("/auth/user");
   },

   logout: function () {
      return axios.get("/auth/logout")
   }

};