<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <i class="bi bi-lightning-fill" style="color: gold"></i>巨速软件工作室
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">首页</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> PDF文档在线免费解析 </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/pdf-merge" class="nav-link">
                  <i class="bi bi-union text-success me-1"></i>PDF文件合并
                </router-link>
              </li>

              <li>
                <router-link to="/pdf-merge" class="nav-link">
                  <i class="bi bi-subtract text-success me-1"></i>PDF文件拆分
                </router-link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">PDF文件OCR识别</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              JavaFX工具软件研发<i class="bi bi-currency-dollar" style="color: gold"></i>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">夜壶围棋辅助工具</a></li>
              <li><a class="dropdown-item" href="#">最难数独生成工具</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">香港公司银行流水提取</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              代理下载服务<i class="bi bi-currency-dollar" style="color: gold"></i>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">国外软件代下载</a></li>
              <li><a class="dropdown-item" href="#">国外视频代下载</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">小型管理系统研发<i class="bi bi-currency-dollar" style="color: gold"></i></a>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#aboutus">关于我们</a></li>
          <li class="nav-item"><a class="nav-link" href="#services">服务案例</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">联系我们</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>
<style scoped></style>
