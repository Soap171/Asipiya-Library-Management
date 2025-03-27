import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "../lib/axios";

export const useBookStore = create((set, get) => ({
  books: [],
  loading: false,

  getAllBooks: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/books/");
      set({ books: res.data.books, loading: false });

      console.log(res.data.books);
    } catch (error) {
      console.log(error);
      set({ loading: false });
      toast.error(error.response?.data?.message || "An error occurred");
      console.log("error occurred in get all books for admin", error.response);
    }
  },

  deleteBook: async (id) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.delete(`/books/${id}`);
      set({ loading: false });
      toast.success(res.data.message);
      get().getAllBooks();
    } catch (error) {
      console.log(error);
      set({ loading: false });
      toast.error(error.response?.data?.message || "An error occurred");
      console.log("error occurred in delete book for admin", error.response);
    }
  },
}));
