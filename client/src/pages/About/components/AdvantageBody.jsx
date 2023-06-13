import Container from "../../../components/Layout/Container/Container";
import AdvantageImage from "./AdvantageImage";

export default function AdvantageBody() {
  return (
    <div className="shadow-[0_0px_25px_6px_rgba(0,0,0,0.1)] relative rounded-md mb-5">
      <div className="min-[1220px]:h-[390px] absolute -translate-y-1/2 w-full">
        <AdvantageImage />
      </div>
      <Container>
        <div className="mt-[271px]">
          <ul className="list-disc list-outside px-[91px] text-sm text-black pt-[215px] pb-[43px] font-poppins leading-8">
            <li>
              <p className="font-semibold inline">Advanced R&D Laboratory</p>
              <p>
                The company has established an advanced R&D laboratory in the
                industry, a professional R&D team, and experimental conditions
                for animal medicine such as disease detection, product
                inspection, and process research, which can realize the whole
                process research from project establishment to industrial
                production; Sinder has animal epidemic disease detection center,
                biological product research and development center, Zhuzi
                process technology platform, Xinda Gene detection reagent
                research and development, Chemical&Herbal drug research and
                development, process and quality center, clinical application
                research and other research and development teams with two CNAS
                laboratories (CNAS laboratories), 2 national scientific research
                platforms (national enterprise technology center, postdoctoral
                scientific research workstation); 7 provincial-level scientific
                research platforms (Shandong Engineering Research Center for
                Livestock and Poultry Major Epidemic Diseases, Shandong
                Provincial Demonstration Engineering Technology Research Center,
                Shandong Animal Biopharmaceutical Engineering Laboratory,
                Shandong Animal Pharmaceutical Manufacturing Innovation Center,
                Shandong Enterprise Technology Research and Development Center
                (Suspension Culture), Shandong Enterprise Technology Research
                and Development Center (Biochemical Agents), Shandong Provincial
                Veterinary Medicine Industry Technology Innovation Strategic
                Alliance)
              </p>
            </li>
            <li>
              <p className="font-semibold inline">
                Inactivated Vaccine Production Workshop
              </p>
              <p>
                The production workshop of inactivated avian influenza vaccine
                is the first production line approved by the Ministry of
                Agriculture and Rural Affairs to use cell suspension culture
                technology to produce highly pathogenic avian influenza vaccine.
                It is the first in the world to achieve large-scale cell
                suspension culture of highly pathogenic avian influenza vaccine
                for animals. The production workshop of inactivated vaccine
                (including subunit) has two production lines of inactivated
                virus vaccine (including virus expression and cell expression
                subunit vaccine) and inactivated bacterial vaccine (including
                bacteria expression subunit vaccine) for cell suspension
                culture, which is capable of producing complex processes and
                high-quality products and can realize the production of multiple
                kinds of antigens.
              </p>
            </li>
            <li>
              <p className="font-semibold inline">
                Complete Equipment And Facilities
              </p>
              <p>
                In Beijing, Sinder Vet has seven vaccine production lines,
                including live embryo culture virus vaccine, live cell culture
                virus vaccine, live bacterial vaccine, inactivated embryo
                culture virus vaccine, inactivated cell culture virus vaccine,
                inactivated bacterial vaccine, and inactivated bacterial vaccine
                (including cell culture subunit vaccine), covering almost all
                production processes in the field of the animal vaccine. It is
                one of the animal biological products enterprises with the most
                comprehensive process, the most complete equipment and
                facilities.
              </p>
            </li>
            <li>
              <p className="font-semibold inline">
                Intelligent Manufacturing Park Completed
              </p>
              <p>
                In December 2021, the high-level biological products intelligent
                manufacturing park has basically completed construction. The new
                park is dedicated to the major diseases of livestock and
                poultry, research and development of biological products, while
                using cell expression, bacterial expression, genetic
                engineering, suspension culture, transfer bottle culture and
                other advanced process technology for product upgrading. With a
                total construction area of over 70,000 square metres, the
                project had 11 newly introduced production lines, making it
                become a new biological product manufacturing park with a larger
                single capacity and more complete production lines in China,
                building up the system from product development, process
                development, Herbal Medicine research, clinical trials to
                industrialization research, covering the whole life cycle of
                biological products.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
