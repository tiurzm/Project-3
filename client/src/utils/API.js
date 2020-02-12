import axios from "axios";

export default {

   // Authentication methods
   // ===============================================

   getUser: function () {
      return axios.get("/auth/user");
   },

   logout: function () {
      return axios("/auth/logout")
   }

};