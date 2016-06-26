var slider-wrap = React.createClass({
    render: function () {
        return (
        	<section>
				<div id="slider-wrap">
					<div class="big-slider">
						<ul class="slides">
							<li>
								<div>
									<div class="picture">
										<img src="images/1.png" />
									</div>
									<div class="slider-container">
										<div class="container">
											<div class="row">
												<div class="col-sm-4">
													<div class="divider" style="height : 315px"></div>
													<p class="regular">pinjam memiliki biaya pinjaman yang sangat efisien sehingga cocok untuk berbagai modal usaha</p>
												</div>
												<div class="col-xs-2 col-md-3"></div>
												<div class="col-sm-5">
													<div class="divider" style="height : 120px"></div>
													<div class="bg-accent1">
														<h5 class="bold" style="font-size:22px">BIAYA PINJAMAN</h5>
														<h2 class="bold" style="font-size:90px">0,7%</h2>
													</div>
													<div class="bg-accent2" style="margin-left : 90px">
														<h3 class="regular" style="font-size:40px">1 MINGGU</h3>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div>
									<div class="picture">
										<img src="images/2.png" />
									</div>
									<div class="slider-container">
										<div class="container">
											<div class="row">
												<div class="col-xs-5 col-ms-4">
													<div class="divider" style="height : 240px"></div>
													<div class="bg-accent2" style="padding-right: 90px">
														<p class="regular">Pinjam Indonesia menerima perhiasan, emas, dan berlian sebagai jaminan. Segera ajukan pinjaman Anda dan dapatkan penawaran terbaik dari kami.</p>
													</div>
												</div>
												<div class="col-xs-7 col-ms-8">
													<div class="divider" style="height : 90px"></div>
													<div class="slide-model" style="margin-left : -120px;margin-right: -24px;">
														<img src="images/slide-emas.png" />
													</div>
													<div class="bg-accent1 custom1" style="margin-left : -150px">
														<h3 class="bold" style="font-size:28px">KINI, PERHIASAN <br />EMAS ANDA BISA <br />JADI JAMINAN</h3>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div>
									<div class="picture">
										<img src="images/3.png" />
									</div>
									<div class="slider-container">
										<div class="container">
											<div class="row">
												<div class="col-xs-6 col-md-4">
													<div class="divider" style="height : 100px"></div>
													<div class="slide-model" style="margin-left : 60px;">
														<img src="images/slide-delivery.png" />
													</div>
												</div>
												<div class="col-xs-6 col-md-6">
													<div class="divider" style="height : 150px"></div>
													<div style="text-align : right">
														<div class="bg-accent1" style="padding-left : 150px;margin-left : -150px">
															<h2 class="bold" style="font-size:36px">LAYANAN</h2>
															<h1 class="bold" style="font-size:48px">ANTAR-JEMPUT</h1>
														</div>
														<div class="bg-accent2">
															<p>Layanan jemput barang dari pinjam <br />akan semakin mempermudah transaksi <br />anda. Transaksi aman  bebas macet.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div>
									<div class="picture">
										<img src="images/banner-waktunya-perempuan.jpg" />
									</div>
								</div>
							</li>
							<li>
								<div>
									<div class="picture">
										<img src="images/banner-mandiri-e-cash.jpg" />
									</div>
								</div>
							</li>
						</ul>
					<div>
				</div>
			</section>	
		);
    }
});
React.render(
    document.getElementById("content")
);