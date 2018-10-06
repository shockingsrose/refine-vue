<template lang="pug">
    div#chart    
</template>

<script>
    import highCharts from "highCharts";
    export default {
        data() {
            return {
                list: [{
                    data: [
                        "0.81",
                        "0.00",
                        "0.75",
                        "0.69",
                        "0.88",
                        "0.83",
                        "0.00"
                    ],
                    date: [
                        "2018-08-18",
                        "2018-08-19",
                        "2018-08-20",
                        "2018-08-21",
                        "2018-08-22",
                        "2018-08-23",
                        "2018-08-24"
                    ],
                    name: "平台汇总"
                }]

            }
        },
        mounted() {
            this.createChart();
        },
        methods: {
            createChart() {
                const options = {
                    chart: {
                        type: "line" //指定图表的类型，默认是折线图（line）
                    },
                    title: {
                        text: "我的第一个图表" // 标题
                    },
                    xAxis: {
                        categories: ["苹果", "香蕉", "橙子"] // x 轴分类
                    },
                    yAxis: {
                        title: {
                            text: "吃水果个数" // y 轴标题
                        }
                    },
                    series: [{
                        data: [
                            0.81,
                            0.00,
                            0.75,
                            0.69,
                            0.88,
                            0.83,
                            0.00
                        ],
                        date: [11, 12, 12, 12, 12, 12],
                        name: "平台汇总"
                    }],
                };
                // 图表初始化函数
                highCharts.chart("chart", options);
            }
        }
    };
</script>
