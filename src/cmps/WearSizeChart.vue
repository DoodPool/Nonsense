<template>
    <div>
        <span>(sizes in in/cm)</span>
        <!-- <table> -->
        <thead>
            <tr>
                <th class="tx-upper" v-for="header in chart.size">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(measurements, area) in chart" :key="area">
                <td v-if="area !== 'size'">{{ area }}</td>
                <td v-if="area !== 'size'" v-for="measurement in measurements">{{ measurement }}</td>
            </tr>
        </tbody>
        <!-- </table> -->
    </div>
</template>
  
<script>
export default {
    props: {
        chart: {
            type: Object,
            required: true,
        }
    },
};
</script>

<style scoped>
th {
    background-color: black;
    color: white;
}

td,
th {
    border-bottom: 1px black solid;
    padding-inline: 0.75rem;

    font-size: 14px;
    font-family: space-grotesk;

    line-height: 20px;
    text-align: start;

    &:first-child {
        border-left: 1px black solid;
    }

    &:last-child {
        border-right: 1px black solid;
    }
}
</style>
  