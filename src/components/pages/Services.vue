<template>
    <div class="wrapper-about">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8 col-lg-10">
            <h1 class="text-center title">
              Our Services
            </h1>
            <div class="row justify-content-center">
                <img class="brand-logo mx-auto" src="../../assets/hunters tooth and talon_intero.png" alt="">
            </div>
  
            <div class="row justify-content-between bottom-card-container">
              <h2 class="text-center mb-5">
                Promises to the Customer
              </h2>
              <!-- Card 1 -->
              <div class="card-hunter col-12 col-md-3">
                <h3 class="text-center">
                  Fast Service
                </h3>
                <div class="card-content d-flex flex-column align-items-center">
                  <i class="fa-solid fa-bolt style-icon fa-3x mb-4"></i>
                  <p>
                    We provide lightning-fast service to meet your needs.
                  </p>
                </div>
              </div>
              <!-- Card 1 -->
  
              <!-- Card 2 -->
              <div class="card-hunter col-12 col-md-3">
                <h3 class="text-center">
                  Professionalism
                </h3>
                <div class="card-content d-flex flex-column align-items-center">
                  <i class="fa-solid fa-user-tie style-icon fa-3x mb-4"></i>
                  <p>
                    Our team consists of highly skilled professionals.
                  </p>
                </div>
              </div>
              <!-- Card 2 -->
  
              <!-- Card 3 -->
              <div class="card-hunter col-12 col-md-3">
                <h3 class="text-center">
                  Quality Assurance
                </h3>
                <div class="card-content d-flex flex-column align-items-center">
                  <i class="fa-solid fa-check-circle style-icon fa-3x mb-4"></i>
                  <p>
                    We ensure the highest quality in all our services.
                  </p>
                </div>
              </div>
              <!-- Card 3 -->
  
              <!-- Card 4 -->
              <div class="card-hunter col-12 col-md-3">
                <h3 class="text-center">
                  24/7 Support
                </h3>
                <div class="card-content d-flex flex-column align-items-center">
                  <i class="fa-solid fa-headset style-icon fa-3x mb-4"></i>
                  <p>
                    Our support team is available round the clock.
                  </p>
                </div>
              </div>
              <!-- Card 4 -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Your script logic goes here
  }
  </script>
<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/style.scss' as *;

.style-icon {
  border: 5px solid $secondary;
  padding: 1rem;
  border-radius: 50%;
  color: $secondary;
}

.wrapper-about {
  background-image: url(../../assets/hunter.bg.jpg);
  padding-top: 10rem;

  p {
    font-family: 'Raleway';
    font-size: 1rem;
    color: $background;
    margin-top: 1rem;
  }

  .brand-logo {
    height: 250px;
    width: 300px;
    margin-bottom: 5rem;
    filter: invert(1);
  }

  .title {
    color: $text;
    font-family: 'Cinzel Decorative';
    font-weight: 600;
    font-size: 3rem;
    padding-bottom: 2rem;
    padding-top: 2rem;
  }

  .card-hunter {
    transition: ease-out 0.5s;
    transform: scale(1);
    background-color: white;
    height: 340px;
    width: 400px;
    margin-bottom: 4rem;
    border-radius: 1rem; /* Add rounded corners to the cards */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
    overflow: hidden; /* Hide content overflow */
  }

  .card-hunter:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
  }

  .card-content {
    padding: 1.5rem;
    border-radius: 1rem;
    text-align: center; /* Center-align content */
  }

  .bottom-card-container {
    h2 {
      font-family: 'Cinzel Decorative';
      color: $text;
      padding: 1rem;
      font-size: 2.4rem;
      font-weight: 600;
    }
  }

  h3 {
    font-family: 'Cinzel Decorative';
    font-weight: 600;
    margin-top: 1rem;
    color: $secondary; /* Match card icon color */
  }
}
</style>
