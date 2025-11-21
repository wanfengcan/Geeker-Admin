<template>
  <section id="aboutus" class="bg-light py-5 scroll-offset">
    <div class="container">
      <h2 class="mb-4 fw-bold">关于我们</h2>

      <div class="row align-items-center">
        <div class="col-lg-6" data-aos="fade-right">
          <p class="lead mb-4">
            在信息爆炸的时代，高效处理信息与文档是核心竞争力。
            <strong>巨速软件工作室</strong>专注于定制化工具软件开发， 帮助您用技术提升效率，让精力专注于创造性工作。
          </p>

          <div class="d-flex flex-wrap gap-3">
            <img src="@/assets/images/tuandui.png" class="img-thumbnail small-img" />
            <img src="@/assets/images/tuanjian.png" class="img-thumbnail small-img" />
            <img src="@/assets/images/hezuo.png" class="img-thumbnail small-img" />
            <img src="@/assets/images/zhuhe.png" class="img-thumbnail small-img" />
          </div>
        </div>

        <div class="col-lg-6" data-aos="fade-left">
          <div class="card-list">
            <div class="p-3 bg-white rounded shadow-sm mb-3 d-flex">
              <i class="bi bi-gear-fill fs-2 me-3 text-primary"></i>
              <div>
                <h5 class="fw-bold">定制化效率工具研发</h5>
                <p>开发轻量级应用或脚本，实现流程自动化。</p>
              </div>
            </div>

            <div class="p-3 bg-white rounded shadow-sm mb-3 d-flex">
              <i class="bi bi-search fs-2 me-3 text-success"></i>
              <div>
                <h5 class="fw-bold">信息获取与数据爬取</h5>
                <p>将非结构化信息转为可分析数据。</p>
              </div>
            </div>

            <div class="p-3 bg-white rounded shadow-sm d-flex">
              <i class="bi bi-file-earmark-text-fill fs-2 me-3 text-warning"></i>
              <div>
                <h5 class="fw-bold">PDF深度处理与内容挖掘</h5>
                <p>精准提取PDF文本、表格，支持合并、拆分与批量处理。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.small-img {
  max-height: 120px;
}
.scroll-offset {
  scroll-margin-top: 56px;
}
</style>
