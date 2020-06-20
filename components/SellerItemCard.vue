<template>
    <div class="column is-one-third">
        <div class="card">
            <div class="card-content">
                <p class="title">{{ attribute }}</p>
                <p class="subtitle">
                    <i>{{ productId }}</i>
                </p>
                <p>
                    <b-icon pack="fas" icon="tag" size="is-small"></b-icon>
                    Price: {{ item.unitprice }}
                    <br />
                    <b-icon
                        pack="fas"
                        icon="dollar-sign"
                        size="is-small"
                    ></b-icon>
                    Cost: {{ item.unitcost }}
                    <br />
                    <b-icon pack="fas" icon="box" size="is-small"></b-icon>
                    Stock: {{ item.quantity }}
                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item" @click="isComponentModalActive = true">
                    <span>
                        <b-icon pack="fas" icon="edit" size="is-small"></b-icon
                        >Edit
                    </span>
                </p>
                <p class="card-footer-item" @click="deleteItem">
                    <span>
                        <a class="is-danger">
                            <b-icon
                                pack="fas"
                                icon="trash-alt"
                                size="is-small"
                            ></b-icon
                            >Delete
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
            <editItem
                @reload="reloadItem"
                :newForm="item"
            ></editItem>
        </b-modal>
    </div>
</template>

<script>
import editItem from '@/components/form/editItem';
export default {
    props: ["productId", "supplierId", "attribute", "id", "item"],
    components: {
        editItem
    },
    data() {
        return {
            isComponentModalActive: false
        }
    },
    methods: {
        deleteItem() {
            this.$buefy.dialog.confirm({
                title: "Deleting supplier",
                message:
                    "Are you sure you want to <b>delete</b> your supplier? This action cannot be undone and all items will be deleted too.",
                confirmText: "Delete Item",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.$buefy.toast.open("Account deleted!")
            });
        },
        reloadItem() {
            this.isComponentModalActive = false;
            this.$emit('reload');
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
.card-content {
    .icon {
        position: relative;
        top: 5px;
    }
}
</style>
