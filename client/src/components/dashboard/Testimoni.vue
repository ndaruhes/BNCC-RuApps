<template>
    <div>
        <div class="section-title">
            <h1>Testimoni</h1>
            <div class="line"></div>
            <button class="btn btn-dark btn-sm add-btn">Tambah<i class="uil uil-plus ms-1"></i></button>
        </div>

        <div class="table-wrapper bg-light">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.add-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
.table-wrapper {
    max-height: 400px;
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>