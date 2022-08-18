
    import React from 'react';
    import { useMotorbikeCreate, useMotorbikeSoftDelete,useMotorbikeMultipleSoftDelete, useMotorbikeUpdate } from '../../queries/Motorbike.queries';
    import Motorbike from './Motorbike';
    
    const MotorbikeContainer = () => {
    
      const {mutate:addRecord} = useMotorbikeCreate();
      const {mutate:editRecord} = useMotorbikeUpdate();
      const {mutate:deleteRecord} = useMotorbikeSoftDelete();
      const {mutate:deleteRecords} = useMotorbikeMultipleSoftDelete();
    
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
        <Motorbike 
          addRecord={onAddRecord}
          deleteRecord={onDeleteRecord}
          deleteRecords={onMultiDelete}
          editRecord={onEditRecord}
        />
      )
    }
    
    export default MotorbikeContainer;
    