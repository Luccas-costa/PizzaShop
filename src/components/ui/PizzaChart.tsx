"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "Small Soft C...", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Licensed Sof...", visitors: 200, fill: "var(--color-safari)" },
  { browser: "Ergonomic St...", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "Tasty Cotton...", visitors: 173, fill: "var(--color-edge)" },
  { browser: "Rustic Rubbe...", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function PizzaChart() {
  return (
    <Card className='flex flex-col bg-transparent border-none text-white'>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[500px] text-white'
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey='visitors' hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='visitors'
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill='#fff'
                  >
                    {`${payload.browser} (${payload.visitors})`}
                  </text>
                );
              }}
              nameKey='browser'
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
