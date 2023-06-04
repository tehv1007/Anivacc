import Logo from "../../../..//assets/images/anivacc-logo.png";

const Company = () => {
  return (
    <div className="col-md-3">
      <div>
        {/* Company Logo */}
        <div className="backstage-stwidgets-settingwrap">
          <div className="sitewidget-pictureNew sitewidget-logo sitewidget-logo-20230106093343">
            <div className="sitewidget-bd">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".sitewidget-logo-20230106093343 img{filter:blur(0);transition:filter .5s ease}",
                }}
              />
              <div
                className="picture-resize-wrap "
                style={{
                  position: "relative",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <span
                  className="picture-wrap pic-style-default 666 "
                  data-ee
                  id="picture-wrap-iGfWhEFtBOLZ"
                  style={{
                    display: "inline-block",
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <a
                    className="imgBox mobile-imgBox"
                    style={{
                      display: "inline-block",
                      position: "relative",
                      maxWidth: "100%",
                    }}
                    href="/index.html"
                  >
                    <img
                      className
                      src={Logo}
                      alt="Feed Additives, PCR test kit, Pig Vaccine, Poultry Medicine, Poultry Vaccine"
                      title="Feed Additives, PCR test kit, Pig Vaccine, Poultry Medicine, Poultry Vaccine"
                      phoenixlazyload="true"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="backstage-stwidgets-settingwrap">
          <div className="sitewidget-placeholder sitewidget-placeHolder-20230106091948">
            <div className="sitewidget-bd">
              <div className="resizee" style={{ height: 20 }} />
            </div>
          </div>
        </div>
        <div className="backstage-stwidgets-settingwrap ">
          <div className="sitewidget-text sitewidget-text-20230106093229 sitewidget-olul-liststyle">
            <div className=" sitewidget-bd ">
              Shandong Sinder Technology Co., Ltd is a China animal health joint
              venture company with SUMITOMO JAPAN that develops, manufactures
              and markets a broad range of veterinary medicines and services.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
