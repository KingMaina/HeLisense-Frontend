import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  listMotorbikes,
  createMotorbike,
  updateMotorbike,
  softDeleteMotorbike,
  softDeleteMultipleMotorbike,
  getMotorbikeAggregate,
  getMotorbikeById,
  getMotorbikeCount
} from "../services/Motorbike.service";

function useMotorbikeList(args, id = "") {
  const { page, limit: paginate } = args.options;
  let $and = [],
    sort = {};

  if (args.query?.$and) {
    $and = { ...args.query?.$and };
  }
  if (args.options?.sort) {
    sort = { ...args.options?.sort };
  }
  return useQuery([`Motorbike${id}`, { page, paginate, $and, sort }], () =>
    listMotorbikes(args)
  );
}

function useMotorbikeCreate() {
  const queryClient = useQueryClient();
  return useMutation(record => createMotorbike(record), {
    onMutate: async newRecord => {
      await queryClient.cancelQueries(["Motorbike"]);

      const previousValue = queryClient.getQueryData(["Motorbike"]) || [];

      queryClient.setQueryData(["Motorbike"], () => [
        ...previousValue,
        newRecord
      ]);
      return previousValue;
    },
    // On failure, roll back to the previous value
    onError: (err, variables, previousValue) =>
      queryClient.setQueryData(["Motorbike"], previousValue),
    // After success or failure, refetch the Motorbikes query
    onSettled: () => {
      queryClient.invalidateQueries(["Motorbike"]);
    }
  });
}

function useMotorbikeUpdate() {
  const queryClient = useQueryClient();
  return useMutation(record => updateMotorbike(record), {
    onMutate: async updatedData => {
      await queryClient.cancelQueries(["Motorbike"]);

      const previousValue = queryClient.getQueryData(["Motorbike"]);

      queryClient.setQueryData(["Motorbike"], old => {
        return old?.map(oldData => {
          if (oldData.id === updatedData.id) return updatedData;
          else return oldData;
        });
      });
      return previousValue;
    },

    // On failure, roll back to the previous value
    onError: (err, variables, previousValue) =>
      queryClient.setQueryData(["Motorbike"], previousValue),
    // After success or failure, refetch the Motorbikes query
    onSettled: () => {
      queryClient.invalidateQueries(["Motorbike"]);
    }
  });
}

function useMotorbikeSoftDelete() {
  const queryClient = useQueryClient();
  return useMutation(record => softDeleteMotorbike(record), {
    onMutate: async deletedRecord => {
      await queryClient.cancelQueries(["Motorbike"]);

      const previousValue = queryClient.getQueryData(["Motorbike"]) || [];
      queryClient.setQueryData(["Motorbike"], oldData =>
        previousValue.filter(record => record.id !== deletedRecord.id)
      );
      return previousValue;
    },

    // On failure, roll back to the previous value
    onError: (err, variables, previousValue) =>
      queryClient.setQueryData(["Motorbike"], previousValue),
    // After success or failure, refetch the Motorbikes query
    onSettled: () => {
      queryClient.invalidateQueries(["Motorbike"]);
    }
  });
}

function useMotorbikeMultipleSoftDelete() {
  const queryClient = useQueryClient();
  return useMutation(record => softDeleteMultipleMotorbike(record), {
    onMutate: async deletedRecord => {
      await queryClient.cancelQueries(["Motorbike"]);

      const previousValue = queryClient.getQueryData(["Motorbike"]) || [];
      queryClient.setQueryData(["Motorbike"], oldData =>
        previousValue.filter(record => !deletedRecord.ids.includes(record.id))
      );
      return previousValue;
    },

    // On failure, roll back to the previous value
    onError: (err, variables, previousValue) =>
      queryClient.setQueryData(["Motorbike"], previousValue),
    // After success or failure, refetch the Motorbikes query
    onSettled: () => {
      queryClient.invalidateQueries(["Motorbike"]);
    }
  });
}

function useMotorbikeCount(id = "") {
  return useQuery([`Motorbike${id}Count`], () => {
    return getMotorbikeCount();
  });
}

function useMotorbikeAggregate(record) {
  return useQuery("Motorbike", () => {
    return getMotorbikeAggregate(record);
  });
}

function useMotorbikeGetById(id) {
  return useQuery(["Motorbike", id], () => {
    return getMotorbikeById(id);
  });
}

export {
  useMotorbikeList,
  useMotorbikeCreate,
  useMotorbikeUpdate,
  useMotorbikeMultipleSoftDelete,
  useMotorbikeCount,
  useMotorbikeSoftDelete,
  useMotorbikeAggregate,
  useMotorbikeGetById
};
