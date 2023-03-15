import { ProcessMonitoringState, ProcessMonitoringType } from '@algotech/core';
import { BaseDocument } from '../base/base.interface';

export interface ProcessMonitoring extends BaseDocument {
  processType: ProcessMonitoringType;
  processState: ProcessMonitoringState;
  current: number;
  total: number;
  result: any;
}
