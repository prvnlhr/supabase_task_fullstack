import supabase from "../config/supabaseClient.js";

const taskServices = {
  getTasks: async () => {
    const { data, error } = await supabase.from("tasks").select("*");
    if (error) throw error;
    return data;
  },

  getTaskById: async (taskId) => {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("id", taskId)
      .single();
    if (error) throw error;
    return data;
  },

  createTask: async (taskData) => {
    const { data, error } = await supabase
      .from("tasks")
      .insert([taskData])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  updateTask: async (taskId, updatedData) => {
    const { data, error } = await supabase
      .from("tasks")
      .update(updatedData)
      .eq("id", taskId)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  deleteTask: async (taskId) => {
    const { error } = await supabase.from("tasks").delete().eq("id", taskId);
    if (error) throw error;
    return { message: "Task deleted successfully" };
  },
};

export default taskServices;
