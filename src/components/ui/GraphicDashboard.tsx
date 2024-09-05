import React from "react";
import { DatePickerWithRange } from "./DataPicker";
import { LineChartComponent } from "./LineChart";

export default function GraphicDashboard() {
  return (
    <div className='w-[62%] h-[400px] border border-zinc-200/60 rounded-lg p-4 flex flex-col'>
      <div className='flex justify-between'>
        <div>
          <div className='text-white text-lg'>Receita no período</div>
          <div className='text-zinc-200/60 text-base'>
            Receita diária no período
          </div>
        </div>
        <div className='flex space-x-2 items-center'>
          <div className='text-xl text-white'>Período</div>
          <div>
            <DatePickerWithRange />
          </div>
        </div>
      </div>
      <div className='flex-grow'>{/* <LineChartComponent /> */}</div>
    </div>
  );
}
