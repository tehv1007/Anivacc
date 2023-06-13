import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from "react";

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-[34px] font-montserrat text-[#333333] font-bold text-center mb-11 capitalize">
          Lịch sử phát triển của công ty
        </h1>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={6}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#4e5d6a] hover:border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] focus-within:text-[#003d79] mb-10">
                2002.03
              </h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2004.1</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2005.04</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2005.06</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2007.09</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2009.06</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2010.02</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2013.02</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2014.05</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2014.10</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2015.08</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2015.12</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2016.05</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2016.06</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2018.08</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2018.11</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2019.03</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2020.03</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2020.04</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2020.05</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2020.07</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2020.09</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2020.11</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2021.03</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2021.08</h3>
            </div>
          </div>
          <div>
            <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
              <div className="border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
                <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
              </div>
              <h3 className="hover:text-[#003d79] mb-10">2021.12</h3>
            </div>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          <div>
            <p>
              In March 2002, a research and development center was set up in
              Qingdao to start the nationwide recruitment of scientific and
              technological innovation personnel, and Dr. Qiao Yanliang, the
              first technical director of the company, was introduced.
            </p>
          </div>
          <div>
            <p>
              Baby received, the seller shipped quickly, logistics is also very
              strong, customer service attitude is excellent, very patient,
              giving a kind of feeling, like it. There are also exquisite
              packaging, high-end atmosphere on the grade; it can be seen that
              the business is very attentive. Baby is really good. It's
              consistent with the picture. There's no difference. It's really
              worth more.
            </p>
          </div>
          <div>
            <p>
              In April 2005, Sichuan Huaxi Animal Pharmaceutical Co., Ltd. was
              successfully acquired and entered the animal health insurance
              market.
            </p>
          </div>
          <div>
            <p>
              In June 2005, a Sino foreign joint venture was established to open
              overseas international cooperation on animal insurance products.
            </p>
          </div>
          <div>
            <p>
              In September 2007, the shareholding system reform was completed
              and Shandong Sinder Technology Co., Ltd. was established. The
              corporate governance structure was more standardized.
            </p>
          </div>
          <div>
            <p>
              In June 2009, Shandong Sinde Animal Vaccine Co., Ltd. was
              established, and became the first domestic enterprise to use cell
              suspension to large-scale culture highly pathogenic avian
              influenza vaccine technology research approved by the Ministry of
              Agriculture.
            </p>
          </div>
          <div>
            <p>
              In February 2010, the transfer factor workshop passed the GMP
              acceptance.
            </p>
          </div>
          <div>
            <p>
              In February 2013, the inactivated recombinant avian influenza
              virus vaccine produced by suspension culture process was
              successfully marketed.
            </p>
          </div>
          <div>
            <p>
              In May 2014, the "Sinder Technology" WeChat public platform was
              officially launched.
            </p>
          </div>
          <div>
            <p>
              In October 2014, Shandong Sinder Animal Vaccine Co., Ltd. was
              recognized as a high-tech enterprise.
            </p>
          </div>
          <div>
            <p>
              In August 2015, Qingdao R&D Base was built in Laoshan District,
              Qingdao, covering an area of 25,000 square meters, with a testing
              center, research institute and R&D center.
            </p>
          </div>
          <div>
            <p>
              In December 2015, it reached strategic cooperation with Sumitomo
              Corporation of Japan, one of the top 500 companies in the world
              and a strategic partner of Shandong Provincial Government, and
              Sumitomo Corporation became the second largest shareholder of
              Trust.
            </p>
          </div>
          <div>
            <p>
              In May 2016, Qingdao Xingfu Farm was established to support the
              management of laying hens.
            </p>
          </div>
          <div>
            <p>
              In June 2016, it cooperated with Xiantan Shares to establish a
              large-scale training institute for farm managers.
            </p>
          </div>
          <div>
            <p>
              In August 2018, the CNAS platform of Shandong Sidner Animal
              Vaccine Co., Ltd. obtained the national certification and passed
              the GCP certification of the Ministry of Agriculture.
            </p>
          </div>
          <div>
            <p>
              In August 2018, the CNAS platform of Shandong Sidner Animal
              Vaccine Co., Ltd. obtained the national certification and passed
              the GCP certification of the Ministry of Agriculture.
            </p>
          </div>
          <div>
            <p>
              In March 2019, Sinder Breeding Technology Service Co., Ltd. was
              established, establishing four breeding training bases in Yantai,
              Dalian, Linyi and Zhucheng respectively, and began to explore the
              breeding trusteeship business; Shandong Xinda Gene Technology Co.,
              Ltd., a joint venture with Taiwan Fuyouda, is engaged in the
              research, development, production and sales of diagnostic
              reagents. So far, Xinde has a full product line business in the
              animal protection industry.
            </p>
          </div>
          <div>
            <p>
              In March 2020, "Sinder Technology Mental Resources Development
              Center" was established to build the mental strength of customers
              and employees and develop the spiritual treasure.
            </p>
          </div>
          <div>
            <p>
              In April 2020, Sinder Institute of Animal and Plant Medicine
              Industry Technology was established, and the comprehensive
              strategic cooperation between the company and Qingdao Agricultural
              University began.
            </p>
          </div>
          <div>
            <p>
              In May 2020, strategic cooperation was reached with Shanghai Haili
              Biotechnology Co., Ltd.
            </p>
          </div>
          <div>
            <p>
              In July 2020, Shandong Dexiang Biotechnology Co., Ltd. was
              established, mainly engaged in the breeding of improved pigs and
              providing spf pigs; Qingdao Muyun Information Technology Co., Ltd.
              was established to help customers build a digital intelligent
              aquaculture management system.
            </p>
          </div>
          <div>
            <p>
              In July 2020, Shandong Dexiang Biotechnology Co., Ltd. was
              established, mainly engaged in the breeding of improved pigs and
              providing spf pigs; Qingdao Muyun Information Technology Co., Ltd.
              was established to help customers build a digital intelligent
              aquaculture management system.
            </p>
          </div>
          <div>
            <p>
              In November 2020, Shandong Province Post doctoral Innovation
              Practice Base and other provincial scientific research and
              innovation platforms; Set up bacteriophage research room and
              Sinder Bacteria Research Center in Liaocheng University.
            </p>
          </div>
          <div>
            <p>
              In March 2021, one of the largest domestic production bases of
              Chinese veterinary drugs will be built in Mianyang, Sichuan
              Province, and the new version of GMP for veterinary drugs will be
              successfully accepted.
            </p>
          </div>
          <div>
            <p>
              In August 2021, subunit vaccine workshop and large animal room for
              P3 level inspection passed the acceptance.
            </p>
          </div>
          <div>
            <p>
              In December 2021, the construction of high-level biological
              products intelligent manufacturing park will be completed.
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
