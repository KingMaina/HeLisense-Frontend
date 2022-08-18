import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  listDetections,
  createDetection,
  updateDetection,
  softDeleteDetection,
  softDeleteMultipleDetection,
  getDetectionAggregate,
  getDetectionById,
  getDetectionCount
} from "../services/Detection.service";

function useDetectionList(args, id = "") {
  const { page, limit: paginate } = args.options;
  let $and = [],
    sort = {};

  if (args.query?.$and) {
    $and = { ...args.query?.$and };
  }
  if (args.options?.sort) {
    sort = { ...args.options?.sort };
  }
  return useQuery([`Detection${id}`, { page, paginate, $and, sort }], () =>
    listDetections(args)
  );
}

function useDetectionCreate() {
  const queryClient = useQueryClient();
  return useMutation(record => createDetection(record), {
    onMutate: async newRecord => {
      await queryClient.cancelQueries(["Detection"]);

      const previousValue = queryClient.getQueryData(["Detection"]) || [];

      queryClient.setQueryData(["Detection"], () => [
        ...previousValue,
        newRecord
      ]);
      return previousValue;
    },
    // On failure, roll back to the previous value
    onError: (err, variables, previousValue) =>
      queryClient.setQueryData(["Detection"], previousValue),
    // After success or failure, refetch the Detections query
    onSettled: () => {
      queryClient.invalidateQueries(["Detection"]);
    }
  });
}

function useDetectionUpdate() {
  const queryClient = useQueryClient();
  return useMutation(record => updateDetection(record), {
    onMutate: async updatedData => {
      await queryClient.cancelQueries(["Detection"]);

      const previousValue = queryClient.getQueryData(["Detection"]);

      queryClient.setQueryData(["Detection"], old => {
        return old?.map(oldData => {
          if (oldData.id === updatedData.id) return updatedData;
          else return oldData;
        });
      });
      return previousValue;
    },

    // On failure, roll back to the previous value
    onError: (err, variables, previousValue) =>
      queryClient.setQueryData(["Detection"], previousValue),
    // After success or failure, refetch the Detections query
    onSettled: () => {
      queryClient.invalidateQueries(["Detection"]);
    }
  });
}

function useDetectionSoftDelete() {
  const queryClient = useQueryClient();
  return useMutation(record => softDeleteDetection(record), {
    onMutate: async deletedRecord => {
      await queryClient.cancelQueries(["Detection"]);

      const previousValue = queryClient.getQueryData(["Detection"]) || [];
      queryClient.setQueryData(["Detection"], oldData =>
        previousValue.filter(record => record.id !== deletedRecord.id)
      );
      return previousValue;
    },

    // On failure, roll back to the previous value
    onError: (err, variables, previousValue) =>
      queryClient.setQueryData(["Detection"], previousValue),
    // After success or failure, refetch the Detections query
    onSettled: () => {
      queryClient.invalidateQueries(["Detection"]);
    }
  });
}

function useDetectionMultipleSoftDelete() {
  const queryClient = useQueryClient();
  return useMutation(record => softDeleteMultipleDetection(record), {
    onMutate: async deletedRecord => {
      await queryClient.cancelQueries(["Detection"]);

      const previousValue = queryClient.getQueryData(["Detection"]) || [];
      queryClient.setQueryData(["Detection"], oldData =>
        previousValue.filter(record => !deletedRecord.ids.includes(record.id))
      );
      return previousValue;
    },

    // On failure, roll back to the previous value
    onError: (err, variables, previousValue) =>
      queryClient.setQueryData(["Detection"], previousValue),
    // After success or failure, refetch the Detections query
    onSettled: () => {
      queryClient.invalidateQueries(["Detection"]);
    }
  });
}

function useDetectionCount(id = "") {
  return useQuery([`Detection${id}Count`], () => {
    return getDetectionCount();
  });
}

function useDetectionAggregate(record) {
  return useQuery("Detection", () => {
    return getDetectionAggregate(record);
  });
}

function useDetectionGetById(id) {
  return useQuery(["Detection", id], () => {
    return getDetectionById(id);
  });
}

export {
  useDetectionList,
  useDetectionCreate,
  useDetectionUpdate,
  useDetectionMultipleSoftDelete,
  useDetectionCount,
  useDetectionSoftDelete,
  useDetectionAggregate,
  useDetectionGetById
};
