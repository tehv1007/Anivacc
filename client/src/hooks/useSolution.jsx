import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabase";

export const useGetSolutionsByType = (solutionType, lang_code) => {
  return useQuery(
    ["solutions", solutionType, lang_code],
    async () => {
      const { data, error } = await supabase
        .from("solutions")
        .select()
        .contains("category", [solutionType])
        .eq("lang_code", lang_code);

      if (error) throw error;

      return data;
    }
    // Các options khác
  );
};

// const solutionPostQueries = useQueries({
//   queries: [
//     {
//       queryKey: ["solution1"],
//       queryFn: () => {
//         return axios.get(
//           "https://blog.cnc-animalhealth.com/wp-json/wp/v2/solution1"
//         );
//       },
//     },
//     {
//       queryKey: ["solution2"],
//       queryFn: () => {
//         return axios.get(
//           "https://blog.cnc-animalhealth.com/wp-json/wp/v2/solution2"
//         );
//       },
//     },
//     {
//       queryKey: ["solution3"],
//       queryFn: () => {
//         return axios.get(
//           "https://blog.cnc-animalhealth.com/wp-json/wp/v2/solution3"
//         );
//       },
//     },
//     {
//       queryKey: ["solution4"],
//       queryFn: () => {
//         return axios.get(
//           "https://blog.cnc-animalhealth.com/wp-json/wp/v2/solution4"
//         );
//       },
//     },
//     {
//       queryKey: ["solution5"],
//       queryFn: () => {
//         return axios.get(
//           "https://blog.cnc-animalhealth.com/wp-json/wp/v2/solution5"
//         );
//       },
//     },
//     {
//       queryKey: ["solution6"],
//       queryFn: () => {
//         return axios.get(
//           "https://blog.cnc-animalhealth.com/wp-json/wp/v2/solution6"
//         );
//       },
//     },
//   ],
// });

// const [currentIndex, setCurrentIndex] = useState(0);
// const getRandomImage = () => {
//   const randomIndex = currentIndex % imageArr.length;
//   setCurrentIndex(currentIndex + 1);
//   return imageArr[randomIndex];
// };
// const getRandomImage = () => {
//   const randomIndex = Math.floor(Math.random() * imageArr.length);
//   return imageArr[randomIndex];
// };
