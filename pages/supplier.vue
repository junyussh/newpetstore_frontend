<template>
<section class="hero is-green">
    <div>
        <!-- <div>
            <b-carousel :indicator-inside="false" class style="margin:auto;width: 50%">
                <b-carousel-item v-for="(item, i) in 6" :key="i">
                    <span class="image">
                        <img :src="getImgUrl(i)" />
                    </span>
                </b-carousel-item>
                <template slot="indicators" slot-scope="props">
                    <span class="al image">
                        <img :src="getImgUrl(props.i)" :title="props.i" />
                    </span>
                </template>
            </b-carousel>
        </div> -->
        <br>
        <br>

        <!-- <div class="columns"> <span style="font: 700 20px Comic Sans MS;color: green;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;margin-left:10%">One sky, one home.</span> </div> -->
        <br>
        <div class="columns" style="width:50%; margin:auto">
            <div class="column">
                <div class="columns is-mobile">
                    <div class="column">
                        <div></div>
                        <!-- <img src="..\static\mao1.gif" width="100%" height="80%"> -->
                    </div>
                    <div class="column">
                        <chunyuCard></chunyuCard>
                    </div>
                    <div class="column">
                        <chunyuCard></chunyuCard>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns"> <span style="font: 900 30px Comic Sans MS;color: green;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;margin-left:10%; width:30%">{{supplier.name}} 's shop</span> </div>
        <div class="columns" style="width:60%; margin:auto">
            <div class="column">
                <div class="columns is-mobile">
                    <div class="column">
                        <span style="font: 700 20px Comic Sans MS;color: green;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;margin-left:10%; width:30%">
                            <div>State: {{supplier.state}}</div><br>
                            <div>City: {{supplier.city}}</div><br>
                            <div>Zip: {{supplier.zip}}</div>
                        </span>
                    </div>
                    <div class="column">
                        <span style="font: 700 20px Comic Sans MS;color: green;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;margin-left:10%; width:30%">
                            <div>Address1: {{supplier.address1}}</div><br>
                            <div>Address2: {{supplier.address2}}</div><br>
                            <div>Phone: {{supplier.phone}}</div>
                        </span>
                    </div>
                    <div class="column">
                        <!-- <chunyuCard></chunyuCard> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="columns" style="width:70%; margin:auto;">

            <div class="column">
                <div class="columns is-mobile">
                    <div class="column" v-for="item in itemList" :key=item>
                        <ItemCard v-bind:title=item.productId v-bind:supplier=item.attribute image="https://source.unsplash.com/WLUHO9A_xik/1600x900" ></ItemCard>
                    </div>

                    <div class="column">
                        <ItemCard title="測試商品" supplier="寵物商店" image="https://source.unsplash.com/WLUHO9A_xik/1600x900" />
                    </div>
                    <div class="column">
                        <ItemCard></ItemCard>
                    </div>
                    <div class="column">
                        <ItemCard></ItemCard>
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
</section>
</template>

<script>
import ItemCard from "@/components/ItemCard";
export default {
    data() {
        return {
            supplier: {
                id: "1234567",
                userId: "7654321",
                name: "Little-Store",
                address1: "北京市昌平区",
                address2: "北街家园八区",
                city: "北京",
                state: "China",
                zip: "102200",
                phone: "13501350135",
            },
            itemList: [{
                id: "123",
                productId: "狗",
                supplierId: "789",
                unitprice: "",
                unitcost: "",
                quantity: "",
                attribute: "白的",
            }, {
                id: "1234",
                productId: "小狗",
                supplierId: "9712",
                unitprice: "",
                unitcost: "",
                quantity: "",
                attribute: "黑的",
            }, {
                id: "111",
                productId: "猫",
                supplierId: "4356",
                unitprice: "",
                unitcost: "",
                quantity: "",
                attribute: "红的",
            }, {
                id: "312452",
                productId: "大猫",
                supplierId: "4326",
                unitprice: "",
                unitcost: "",
                quantity: "",
                attribute: "黄的",
            }, {
                id: "3457",
                productId: "公鸡",
                supplierId: "5673",
                unitprice: "",
                unitcost: "",
                quantity: "",
                attribute: "绿的",
            }, {
                id: "24567",
                productId: "大狗",
                supplierId: "2345",
                unitprice: "",
                unitcost: "",
                quantity: "",
                attribute: "紫的",
            }, ],
        }
    },
    components: {
        ItemCard
    },
    methods: {
        getImgUrl(value) {
            return `https://picsum.photos/id/43${value}/1230/500`;
        }
    }
};
</script>

<style>
.is-active .al img {
    filter: grayscale(0%);
}

.al img {
    filter: grayscale(100%);
}
</style>
