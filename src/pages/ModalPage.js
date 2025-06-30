import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you!!</p>
    </Modal>
  );

  return (
    <div className="relative">
        
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit
        amet, consectetur, adipisci velit..." "There is no one who loves pain
        itself, who seeks after it and wants to have it, simply because it is
        pain..." Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        id elit suscipit, porta mi eu, faucibus augue. Duis dignissim id dolor
        id vehicula. Cras est elit, porta ac vestibulum sed, iaculis et mauris.
        In tempor dui nisi, et accumsan enim tincidunt quis. Aenean tellus eros,
        mattis non arcu id, tincidunt pellentesque lorem. Integer maximus nisl
        ac nibh accumsan, vel interdum nibh laoreet. Nullam sollicitudin
        vulputate vestibulum. Donec at fermentum velit. In feugiat facilisis
        turpis, nec varius nulla tristique tincidunt. Nam quis pulvinar dui. Sed
        ut libero aliquam, mollis turpis et, ullamcorper tortor. Maecenas
        ullamcorper molestie nulla id posuere. Etiam vehicula non urna sit amet
        accumsan. Morbi mollis arcu ut faucibus commodo. Vestibulum tincidunt,
        lacus eu sollicitudin sodales, erat neque ultricies purus, at aliquet
        arcu velit quis dui. Praesent massa risus, convallis sed volutpat a,
        vestibulum fermentum felis. Sed eu sagittis tortor, vel pulvinar magna.
        Maecenas non ex in sem pellentesque hendrerit sed ac lorem. Pellentesque
        id orci ornare, sollicitudin turpis sed, feugiat lacus. Etiam nec luctus
        dui. Maecenas at mattis nisl, id elementum arcu. Sed ex tortor, egestas
        at dignissim a, pharetra nec massa. Ut pretium ex vel condimentum
        rhoncus. Duis commodo, justo ut lobortis maximus, mauris eros aliquam
        est, ac elementum ligula ipsum eget diam. Nunc sollicitudin arcu
        malesuada, varius massa sit amet, viverra neque. Sed maximus porta
        vestibulum. Aenean eleifend leo ac purus lacinia, at condimentum tortor
        lobortis. Vestibulum ut diam augue. Nunc cursus fermentum sem eget
        aliquet. Sed malesuada sem enim, sed mollis odio sollicitudin quis. Nam
        efficitur leo vitae ipsum tincidunt laoreet. Etiam luctus, elit ac
        aliquet congue, mauris mi vestibulum turpis, id placerat ligula ex eu
        felis. Ut mollis justo id tincidunt rutrum. Mauris molestie vehicula est
        dapibus dignissim. Pellentesque laoreet leo vel congue porttitor. Nulla
        non posuere tellus. Phasellus consectetur a nunc id tincidunt. Aliquam
        mollis odio nulla, vitae vehicula urna bibendum sit amet. Nunc non
        finibus odio. Duis vel arcu lacus. Morbi consectetur lacinia lectus vel
        maximus. Pellentesque sit amet massa quis dui tristique ultrices ac id
        libero. Ut massa sapien, dignissim at sem ut, hendrerit lobortis metus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nisi
        sed augue tristique convallis eget vehicula tellus. Duis dui nisl,
        lacinia sed lacus sit amet, volutpat volutpat augue. Quisque orci
        sapien, tempor ut auctor ut, maximus non sem. Suspendisse ullamcorper
        vehicula nunc, non porta elit cursus in. Duis pulvinar quis nisi non
        accumsan. Nunc sed ligula ut mi faucibus fringilla. Quisque ac diam
        euismod, porttitor magna in, commodo ante. Phasellus magna dui, faucibus
        eget velit id, convallis varius enim. Cras ultricies a dolor nec
        placerat. Aliquam facilisis ac sapien et imperdiet. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Aliquam erat volutpat. Phasellus quis dictum nibh, euismod congue
        lectus. Mauris et egestas nisi, et facilisis enim. Vestibulum ornare
        felis eu eros aliquet, non consequat orci maximus. Vestibulum luctus
        porta nibh nec aliquam. Aenean libero ex, eleifend vitae justo eu,
        fermentum ullamcorper sapien. Donec ullamcorper risus vitae mauris
        euismod, vehicula blandit lorem tempus. Phasellus mi est, rutrum non
        maximus at, hendrerit non nisl.
      </p>
    </div>
  );
}

export default ModalPage;
