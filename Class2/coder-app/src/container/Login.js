import React from 'react';
import '../container/login2.css';

function Login() {
    return (
    <div class="container py-5">
  <div class="row mb-5">
    <div class="col-lg-8 text-black py-4 text-center mx-auto">
      <h1 class="display-4">¡Hola!</h1>
      <p class="lead mb-0">Para comprar accede con tu e-mail o crea una cuenta.</p>
    </div>
  </div>

  <div class="p-5 bg-white rounded shadow mb-5">
    <ul id="myTab2" role="tablist" class="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center">
      <li class="nav-item flex-sm-fill">
        <a id="home2-tab" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true" class="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 active">iniciar sesion</a>
      </li>
      <li class="nav-item flex-sm-fill">
        <a id="profile2-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile2" aria-selected="false" class="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0">crear cuenta</a>
      </li>
    </ul>
    <div id="myTab2Content" class="tab-content">
        {/* tab login */}
      <div id="home2" role="tabpanel" aria-labelledby="home-tab" class="tab-pane fade px-5 py-5 show active">
        <form>
        <div class="form-group">
                <div class="form-group col-md-12">
                  <input type="text" class="form-control" placeholder="Email"/>
                </div>
        </div>                
        <div class="form-group">
               <div class="form-group col-md-12">
                 <input type="password" class="form-control" placeholder="Contrasena"/>
               </div>
            {/* btn btn-primary */}
            <div class="form-group col-md-12">
                <button type="submit" class="btn btn-dark rounded-p2 btn-block">iniciar sesion</button>
            </div>
            </div>
        </form>
      </div>

      {/* tab create user */}
      <div id="profile2" role="tabpanel" aria-labelledby="profile-tab" class="tab-pane fade px-4 py-5">
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" placeholder="Nombres"/>
                </div>
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" placeholder="Apellidos"/>
                </div>
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" placeholder="Email"/>
                </div>
                <div class="form-group col-md-6">
                    <input type="password" class="form-control" placeholder="Contrasena"/>
                </div>
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" placeholder="Dni"/>
                </div>
                <div class="form-group col-md-12">
                <button type="submit" class="btn btn-dark rounded-p2 btn-block">crear cuenta</button>
                {/* btn btn-primary */}
                </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>
    )
}

export default Login
