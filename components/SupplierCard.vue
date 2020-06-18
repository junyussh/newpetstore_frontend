<template>
    <div class="column is-one-third">
        <div class="card">
            <div class="card-content">
                <p class="title">{{ name }}</p>
                <p class="subtitle">{{ city }} {{ city ? ", "+state : state}}</p>
            </div>
            <footer class="card-footer">
                <nuxt-link :to="{ path: '/dashboard/supplier/'+id}" class="card-footer-item">
                    <span>
                        <b-icon pack="fas" icon="boxes" size="is-small"></b-icon>Manage
                    </span>
                </nuxt-link>
                <p class="card-footer-item" @click="editSupplier">
                    <span>
                        <b-icon pack="fas" icon="edit" size="is-small"></b-icon>Edit
                    </span>
                </p>
                <p class="card-footer-item" @click="deleteSupplierDialog">
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
            <editSupplier @reload="reloadSupplier" :newForm="form"></editSupplier>
        </b-modal>
    </div>
</template>
<script>
import editSupplier from '@/components/form/editSupplier';
export default {
    data() {
        return {
            isComponentModalActive: false
        }
    },
    components: {
        editSupplier
    },
    props: ["name", "city", "state", "id", "form"],
    methods: {
        deleteSupplierDialog() {
            this.$buefy.dialog.confirm({
                title: "Deleting supplier",
                message:
                    "Are you sure you want to <b>delete</b> your supplier? This action cannot be undo and all items will be deleted too.",
                confirmText: "Delete Supplier",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.deleteSupplier()
            });
        },
        deleteSupplier() {
            let _this = this;
            this.$axios.$delete("/suppliers/"+this.id).then(res => {
                this.$buefy.toast.open({
                        duration: 2000,
                        message: "Supplier "+this.name+" deleted!",
                        type: "is-success"
                    });
                _this.reloadSupplier();
            }).catch(e => {
                this.$buefy.toast.open({
                        duration: 2000,
                        message: "Something got error!",
                        type: "is-danger"
                    });
            })
        },
        editSupplier() {
            this.isComponentModalActive = true;
        },
        reloadSupplier() {
            this.isComponentModalActive = false;
            this.$emit("reload")
        }
    }
};
</script>
<style lang="scss">
.is-danger {
    color:  hsl(348, 100%, 61%);
    &:hover {
        color:  hsl(348, 100%, 74%);
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