<template>
  <section class="hero is-black is-large">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroB">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end">
              <nuxt-link to="/log" class="navbar-item is-active">Log In</nuxt-link>
              <span class="navbar-item">
                <a class="button is-primary is-inverted is-medium">
                  <nuxt-link to="/login">Home</nuxt-link>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <span
      style="margin:0 auto;margin-top:7%; font: 700 100px Comic Sans MS;color: white;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;"
    >Welcome To JPetstore</span>
    <div class="hero-body" style="width:40%; margin:0 auto; margin-top:-10%;">
      <!-- <div class="container has-text-centered"> -->
      <!-- <h1 class="title is-size-1">Welcome to Petstore</h1> -->
      <!-- </div> -->
      <div class="container is-centered">
        <div class="field is-primary">
          <label class="labe">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div class="field is-primary">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Text input" value="bulma" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-success" style="font-size: 18px;">This username is available</p>
        </div>

        <div class="field is-primary">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Email input" value="hello@" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p class="help is-danger" style="font-size: 18px;">This email is invalid</p>
        </div>

        <div class="field is-primary">
          <label class="label">Subject</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field is-primary">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />
              I agree to the
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
        <span
          style="margin:0 auto;margin-top:7%; font: 700 20px Comic Sans MS;color: white;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;"
        >
          Already have a account? Click here to
          <nuxt-link to="/log">log in!</nuxt-link>
        </span>
      </div>
    </div>
    <div class="hero-foot"></div>
  </section>
</template>