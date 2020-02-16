import axios from "axios";

export default {

   // Authentication methods
   // ===============================================
   saveTrip: function (){
      return axios.post("/api/calendar/add/:id")
   },

   getUser: function () {
      return axios.get("/auth/user");
   },

   logout: function () {
      return axios("/auth/logout")
   }

};