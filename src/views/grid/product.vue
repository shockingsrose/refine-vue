<template>
    <div class="wrap-box">
        <div class="img-box">
            <img src="" alt="" style="width: 100%">
            <div class="mask-box">
                <div class="mask">
                    <p class="p-ellips color-fff" title="精品女装抹胸一1肩连体裤夏季新款印花薄款松紧高腰阔腿短裤现货">精品女装抹胸一1肩连体裤夏季新款印花薄款松紧高腰阔腿短裤现货</p>
                </div>

            </div>
        </div>
        <div class="padding-9">
            <p class="p-shelves mb-15">2017-09-12 上架</p>
            <Row class="font-weight">
                <Col span="12" class="mb-9">pv: 23000000</Col>
                <Col span="12" class="mb-9 text-right color-blue">维权率: 23.00%</Col>
                <Col span="12" class="mb-9">销量: 123123</Col>
                <Col span="12" class="mb-9 text-right">转化率: 23.23%</Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                type: Object,
                default: () => ({}),
            },
        },
    };
</script>

<style scoped lang="scss">
    .wrap-box {
      width: 220px;
      border-radius: 5px;
      overflow: hidden;
      border: 1px solid rgba(241, 241, 241, 1);
    }
    .img-box {
      position: relative;
      width: 100%;
      height: 230px;
      background-color: aqua;
    }
    .mask-box {
      position: absolute;
      bottom: 0;
      height: 40px;
      line-height: 40px;
      width: 100%;
    }
    .mask {
      padding-left: 11px;
      padding-right: 15px;
      width: 100%;
      height: 40px;
      background-color: rgba(0, 0, 0, 0.6);
    }
    .p-ellips {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: middle;
    }

    .p-shelves {
      height: 13px;
      line-height: 13px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(164, 164, 164, 1);
    }

    .color-fff {
      color: #fff;
    }
    .color-51 {
      color: #515151;
    }

    .color-blue {
      color: #2b92ff;
    }

    .padding-9 {
      padding: 9px;
    }

    .mb-9 {
      margin-bottom: 9px;
    }

    .mb-15 {
      margin-bottom: 15px;
    }

    .text-right {
      text-align: right;
    }

    .font-weight {
      font-weight: bold;
    }
</style>
