<template>


<!-- Page Wrapper -->


    <!-- Sidebar -->
    <section class="bg-dark">
            <div class="container-fluid">

                <div class="wrapper">
                    <div v-if="hunters.length > 0">
                        
                       
                </div>
        
    </div>

                <!-- Page Heading -->
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="/edit-profile" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fa-solid fa-user-pen me-2"></i>Edit Profile</a>
                </div>

                <!-- Content Row -->
                <div class="row d-flex justify-content-between">

                    <div class="user_detail col-5 card shadow mb-4 pt-4 pb-4">
                        <div class="image-container">
                            <img :src=" hunters[0].image " alt="">
                        </div>
                        
                    </div>
                    <div class="user_detail col-xl-6 card shadow mb-4 pt-4">
                        <div class="col-xl-12 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            NAME:</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{ hunters[0].name }} {{ hunters[0].surname }}</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- Earnings (Monthly) Card Example -->
                    <div class="col-xl-12 col-md-6 mb-4">
                        <div class="card border-left-success shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            Phone Number:</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{ hunters.phone }}0075275283678</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- Earnings (Monthly) Card Example -->
                    <div class="col-xl-12 col-md-6 mb-4">
                        <div class="card border-left-info shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Address
                                        </div>
                                        <div class="row no-gutters align-items-center">
                                            <div class="col-auto">
                                                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{ hunters.address }}via avadacadabra alakazam</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- Pending Requests Card Example -->
                    <div class="col-xl-12 col-md-6 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            SERVICES</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{ hunters.services }}Faccio pulizia di Goblin fastidiosi</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-comments fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        
                    </div>

                    <!-- Earnings (Monthly) Card Example -->
                    

                    

                    

                    

                <!-- Content Row -->

                <div class="row">

                    <!-- Area Chart -->
                    <div class="col-xl-8 col-lg-7">
                        <div class="card shadow mb-4">
                            <!-- Card Header - Dropdown -->
                            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">CV</h6>
                                <div class="dropdown no-arrow">
                                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                        <div class="dropdown-header">Dropdown Header:</div>
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <!-- Card Body -->
                            <div class="card-body">
                                <div class="chart-area"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                                    <canvas id="myAreaChart" style="display: block; width: 824px; height: 320px;" width="824" height="320" class="chartjs-render-monitor"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pie Chart -->
                    <div class="col-xl-4 col-lg-5">
                        <div class="card shadow mb-4">
                            <!-- Card Header - Dropdown -->
                            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                <div class="dropdown no-arrow">
                                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                        <div class="dropdown-header">Dropdown Header:</div>
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <!-- Card Body -->
                            <div class="card-body">

                                <div class="chart-pie pt-4 pb-2"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                                    <canvas id="myPieChart" width="379" height="245" style="display: block; width: 379px; height: 245px;" class="chartjs-render-monitor"></canvas>
                                </div>
                                <div class="mt-4 text-center small">
                                    <span class="mr-2">
                                        <i class="fas fa-circle text-primary"></i> Direct
                                    </span>
                                    <span class="mr-2">
                                        <i class="fas fa-circle text-success"></i> Social
                                    </span>
                                    <span class="mr-2">
                                        <i class="fas fa-circle text-info"></i> Referral
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                        
                        

            </div>
    </section>        

    
        



</template>
<script>
import axios from 'axios';

export default {
    name:'Dashboard',

    data() {
        return {
            hunters: [],
            apiUrl: 'http://127.0.0.1:8000/api/hunters'
        }
    },

    methods: {
        getHunter() {
            const params = {}
            // console.log(params);
            axios.get(this.apiUrl, { params })
                .then((response) => {
                console.log(response.data.results);
                this.hunters = response.data.results.data;
            })
                .catch(function (error) {
                console.log(error);
            })
                .finally(function () {
            });
        }
    },
    created() {
        this.getHunter();
    } 
}
</script>
<style lang="scss" scoped>
    .container-fluid{
        width: 80%;
        padding-top: 8rem;
        
    }
    
    .image-container{

        height: 500px;
    
        object-fit: cover;
        img{
            height: 100%;
        }
    }
</style>