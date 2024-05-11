<template>

    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 v-if="title">
                        <i :class="icon" v-if="icon"></i>
                        {{ title }}
                    </h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><router-link to="/">Beranda</router-link></li>
                        <li class="breadcrumb-item active">{{ title }}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    props : {
        title : {
            type : String,
            default : null,
        },
        icon : {
            type : String,
            default : null,
        }
    },
    beforeMount() {
        let title = this.$store.state.app.name;
        title = this.title ? `${this.title} | ${title}` : title;
        $('title').html(title);
    }
}

</script>