<template>
    <div class="column is-one-third">
        <div class="card">
            <div class="card-content">
                <p class="title">{{ name }}</p>
                <p class="subtitle">{{ city }} {{ city ? ", "+state : state}}</p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        <b-icon pack="fas" icon="boxes" size="is-small"></b-icon>Manage
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        <b-icon pack="fas" icon="edit" size="is-small"></b-icon>Edit
                    </span>
                </p>
                <p class="card-footer-item" @click="deleteSupplier">
                    <span>
                        <a class="is-danger">
                            <b-icon pack="fas" icon="trash-alt" size="is-small"></b-icon>Delete
                        </a>
                    </span>
                </p>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
    props: ["name", "city", "state", "id"],
    methods: {
        deleteSupplier() {
            this.$buefy.dialog.confirm({
                title: "Deleting supplier",
                message:
                    "Are you sure you want to <b>delete</b> your supplier? This action cannot be undone and all items will be deleted too.",
                confirmText: "Delete Supplier",
                type: "is-danger",
                hasIcon: true,
                onConfirm: () => this.$buefy.toast.open("Account deleted!")
            });
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