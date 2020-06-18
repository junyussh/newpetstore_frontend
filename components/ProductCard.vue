<template>
<div class="column is-one-third">
    <div class="card">
        <div class="card-content">
            <p class="title">{{ name }}</p>
            <p class="subtitle">{{ description }}
                <br> {{ id }}
            </p>
        </div>
        <footer class="card-footer">
            <nuxt-link :to="{ path: '/dashboard/product/'+id}" class="card-footer-item">
                <span>
                    <b-icon pack="fas" icon="boxes" size="is-small"></b-icon>Manage
                </span>
            </nuxt-link>
            <p class="card-footer-item" @click="isComponentModalActive = true">
                <span>
                    <b-icon pack="fas" icon="edit" size="is-small"></b-icon>Edit
                </span>
            </p>
            <p class="card-footer-item" @click="deleteProductDialog">
                <span>
                    <a class="is-danger">
                        <b-icon pack="fas" icon="trash-alt" size="is-small"></b-icon>Delete
                    </a>
                </span>
            </p>
        </footer>
    </div>
    <b-modal
            :active.sync="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal
        >
            <editProduct @reload="reloadProduct" :newForm="product"></editProduct>
        </b-modal>
</div>
</template>

<script>
import editProduct from '@/components/form/editProduct';
export default {
    props: ["name", "description", "id", "product"],
    components: {
        editProduct
    },
    data() {
        return {
            isComponentModalActive: false
        }
    },
    methods: {
        deleteProductDialog() {
            this.$buefy.dialog.confirm({
                title: "Deleting supplier",
                message: "Are you sure you want to <b>delete</b> your supplier? This action cannot be undone and all items will be deleted too.",
                confirmText: "Delete Product",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.deleteProduct()
            });
        },
        deleteProduct() {
            let _this = this;
            this.$axios.$delete("/products/"+this.id).then(res => {
                this.$buefy.toast.open({
                        duration: 2000,
                        message: "Product "+this.name+" deleted!",
                        type: "is-success"
                    });
                _this.reloadProduct();
            }).catch(e => {
                this.$buefy.toast.open({
                        duration: 2000,
                        message: "Something got error!",
                        type: "is-danger"
                    });
            })
        },
        reloadProduct() {
            this.isComponentModalActive = false;
            this.$emit("reload")
        }
    }
};
</script>

<style lang="scss">
.is-danger {
    color: hsl(348, 100%, 61%);

    &:hover {
        color: hsl(348, 100%, 74%);
    }

}

.card-footer-item {
    cursor: pointer;

    &:hover {
        background: rgba(219, 219, 219, 0.76);

        .is-danger {
            color: hsl(348, 100%, 74%);
        }
    }

    &:active {
        background: rgba(146, 146, 146, 0.76);
    }

    .icon {
        position: relative;
        top: 5px;
    }
}
</style>
