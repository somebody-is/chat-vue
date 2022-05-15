<template>
  <div>
      <div class="tab-pane fade" id="nav-tab-user" name="nav-tab" role="tabpanel">

<div class="d-flex justify-content-between align-items-center mb-4">
<h3 class="mb-0 text-primary">Profile</h3>
<div>
<a href="signin.html" title="" class="btn btn-dark">Sign Out</a>
</div>
</div>

<div class="form-group input-group-lg search mb-3">
<i class="zmdi zmdi-search"></i>
<input type="text" class="form-control" placeholder="Search...">
</div>

<div class="card border-0 text-center pt-3 mb-4">
<div class="card-body">
<div class="card-user-avatar">
<img src="http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/user.png" alt="avatar">
<button type="button" class="btn btn-secondary btn-sm"><i class="zmdi zmdi-edit"></i></button>
</div>
<div class="card-user-detail mt-4">
<h4>Michelle Green</h4>
<span class="text-muted"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="15787c767d707979703b726770707b557278747c793b767a78">[email&nbsp;protected]</a></span>
<p>+14 123 456 789 - New york (USA)</p>
<div class="social">
<a class="icon p-2" href="#" data-toggle="tooltip" title="" data-original-title="Facebook"><i class="zmdi zmdi-facebook-box"></i></a>
<a class="icon p-2" href="#" data-toggle="tooltip" title="" data-original-title="Github"><i class="zmdi zmdi-github-box"></i></a>
<a class="icon p-2" href="#" data-toggle="tooltip" title="" data-original-title="Linkedin"><i class="zmdi zmdi-linkedin-box"></i></a>
<a class="icon p-2" href="#" data-toggle="tooltip" title="" data-original-title="Instagram"><i class="zmdi zmdi-instagram"></i></a>
</div>
</div>
</div>
</div>

<div class="card border-0">
<ul class="list-group custom list-group-flush">

<li class="list-group-item d-flex justify-content-between align-items-center">
<span>Color scheme</span>
<ul class="choose-skin list-unstyled mb-0">
<li data-theme="indigo" data-toggle="tooltip" title="" data-original-title="Theme-Indigo"><div class="indigo"></div></li>
<li class="active" data-theme="cyan" data-toggle="tooltip" title="" data-original-title="Theme-Cyan"><div class="cyan"></div></li>
<li data-theme="green" data-toggle="tooltip" title="" data-original-title="Theme-Green"><div class="green"></div></li>
<li data-theme="blush" data-toggle="tooltip" title="" data-original-title="Theme-Blush"><div class="blush"></div></li>
<li data-theme="dark" data-toggle="tooltip" title="" data-original-title="Theme-Dark"><div class="dark"></div></li>
</ul>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
<span>Desktop notifications</span>
<label class="c_checkbox">
<input type="checkbox" checked="">
<span class="checkmark"></span>
</label>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
<span>Sound notifications</span>
<label class="c_checkbox">
<input type="checkbox">
<span class="checkmark"></span>
</label>
</li>
<li class="list-group-item border-0 mt-3">
<a class="link" href="#"><i class="zmdi zmdi-chevron-right me-2"></i> Need Help? Let's chat</a>
</li>
<li class="list-group-item border-0">
<a class="link" href="#"><i class="zmdi zmdi-chevron-right me-2"></i> Knowledgebase</a>
</li>
<li class="list-group-item border-0">
<a class="link" href="#"><i class="zmdi zmdi-chevron-right me-2"></i> english (United States)</a>
</li>
<li class="list-group-item mb-3">
<a class="link" href="#"><i class="zmdi zmdi-chevron-right me-2"></i> Browser &amp; App Sessions</a>
</li>
</ul>

<div class="card-body text-center border-top">
<button type="button" class="btn btn-secondary">Update Profile</button>
</div>
</div>
</div>
  </div>
</template>

<script>
export default {
    name:"UserBar",
}
</script>

<style>

</style>