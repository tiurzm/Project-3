import axios from "axios";

export default {

   // Authentication methods
   // ===============================================
   saveTrip: function (trip){
      return axios.post("/api/calendar/add", trip)
   },

   getUser: function () {
      return axios.get("/auth/user");
   },

   logout: function () {
      return axios("/auth/logout")
   }

};