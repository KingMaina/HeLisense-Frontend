
    import React from 'react';
    import { useDetectionCreate, useDetectionSoftDelete,useDetectionMultipleSoftDelete, useDetectionUpdate } from '../../queries/Detection.queries';
    import Detection from './Detection';
    
    const DetectionContainer = () => {
    
      const {mutate:addRecord} = useDetectionCreate();
      const {mutate:editRecord} = useDetectionUpdate();
      const {mutate:deleteRecord} = useDetectionSoftDelete();
      const {mutate:deleteRecords} = useDetectionMultipleSoftDelete();
    
      const onAddRecord = (record) => {
        return new Promise((resolve,reject) => {
          addRecord(record, {
            onSuccess: async () => resolve('Record created successfully.'),
            onError: async (error) => reject(error?.message || "Can not connect to server"),
          });
        })
      };
    
      const onEditRecord = (record) => {
        return new Promise((resolve, reject) => {
          editRecord(
            record,
            {
              onSuccess: async () => resolve('Record updated successfully.'),
              onError: async (error) => reject(error?.message || "Can not connect to server"),
            }
          );
        });
      };
    
      const onDeleteRecord = (record) => {
        return new Promise((resolve, reject) => {
          deleteRecord(
            record, 
            {
              onSuccess: async () => resolve('Record deleted successfully.'),
              onError: async (error) => reject(error?.message || "Can not connect to server"),
            }
          );
        });
      };

      const onMultiDelete = (record) => {
        return new Promise((resolve, reject) => {
          deleteRecords(
            record, 
            {
              onSuccess: async () => resolve('Records deleted successfully.'),
              onError: async (error) => reject(error?.message || "Can not connect to server"),
            }
          );
        });
      };

      return (
        <Detection 
          addRecord={onAddRecord}
          deleteRecord={onDeleteRecord}
          deleteRecords={onMultiDelete}
          editRecord={onEditRecord}
        />
      )
    }
    
    export default DetectionContainer;
    