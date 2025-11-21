<template>
  <section id="services" class="text-center py-5 scroll-offset">
    <h2 class="mb-4 fw-bold">我们的服务案例</h2>

    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card h-100">
            <img src="@/assets/images/GeekerAdmin.png" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Geeker-Admin</h5>
              <p class="card-text">Vue3 + TS + ElementPlus 的小型管理系统。</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="card h-100">
            <img src="@/assets/images/minikuaiji.png" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">银行流水提取工具</h5>
              <p class="card-text">基于 JavaFX + SpringBoot 的本地工具软件。</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="card h-100">
            <img src="@/assets/images/templates.png" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">模板替换处理</h5>
              <p class="card-text">批量生成 Word/简历等文档，实现变量自动替换。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scroll-offset {
  scroll-margin-top: 56px;
}
</style>
