import React, { useState } from "react";

const PhotoGallery = () => {
  // Sample photo URLs (you can replace these with your actual photo URLs)
  const photos = [
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/454755727_3751911368400562_570788157939186563_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGsgpML8SeGXg30eyUAHidAMxRUYM_ZCkAzFFRgz9kKQA45OtePG1ydxl6NhFWC6Nr08FVvTRfLx_KCSwLKkmiN&_nc_ohc=zyKXRoei_fAQ7kNvgEx5yyB&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AMBS1Cz2yzgxW1sqk8QYNW0&oh=00_AYDoGiSG_Kg1kP1evaMAkk_5mGDo-RER0FNKK69YbOL1Vg&oe=6744D2B7",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/434086638_3653315401593493_1023480404045618759_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFcI2ALupGG3hg4uizHmY0l9Qdj2spRao_1B2PaylFqj56KeFNpf1-hjeBQehXNE_mL98pMASKqcH3G2k2CZAtk&_nc_ohc=PW7ACUnh8BgQ7kNvgEiobMg&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=ATDd2Ov9iaW6P-y-HwF_TRU&oh=00_AYDtNsaSArhKxixC5vrHKsydPd7XsYQ8fKVs5isX2OaZVg&oe=674502E1",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/439053657_3675598269365206_6166678277154535274_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG60zpkS4Al4HTvKfagBZAOUGe4yFf1kQJQZ7jIV_WRAv-2xNkHOZp6S75OB7V7-WVCEUknA3TttGsHUCxCxr1-&_nc_ohc=OWbG_7881zUQ7kNvgEk0K5D&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=AKXY1IXr6wUqLfD11jlGYK9&oh=00_AYDwXjoGVa6XIO9GAmZVai5Xc2eh2rcjUx0b9gbDyXbN9g&oe=67450484",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/439019261_3675598242698542_7632239016473800359_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEaXfvRsJ9DKEQXhytLG-ngTp_gcS1CWAdOn-BxLUJYB1RvAJYEQrOP5eY0LWM4D6YVgQlvdvKWyZzdGZ5g_7Y4&_nc_ohc=AmqWKSiX1xMQ7kNvgGnNKn5&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AdiwFBYsPKzn9ZuKDBPvUw9&oh=00_AYAI0W0LtSxcy2DRMEWTKiDtKMBDQU6ptziDjxQ59505fg&oe=6744D6C9",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/439446964_3675598106031889_811682262856895136_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEI_JqPUMEt8J5-zxu-6n6_o-GFRzK36bGj4YVHMrfpsVia_6pEWKWzBhFPxIYOeA-vfntoBlo9do2xGDjCX-_S&_nc_ohc=wMT-MBTosEYQ7kNvgFZD7vv&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=Ahq1DweU2a-5tTS-ccKh06p&oh=00_AYBWelekafPKLBevkTfqTcsOcRErBhELxBMN0OtI8-fx5w&oe=6744FEDE",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/437858324_3668343543424012_8435335265137980139_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEyHxGPSW7zq5zg6cQxAsgebOe4UHtCtRFs57hQe0K1EcptbHuMT0dFx4a7HTS6GGbCp59KeuC-o2sVNc23XoHt&_nc_ohc=Ad8z5GL-KGoQ7kNvgHF7IYC&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=AaSBvZ68Ns_VEjqbXZ5ZrXW&oh=00_AYCZHGsk4AbRemTfle7OkDd_OPs0xkS5KqOYIK0WJvRBlQ&oe=6744DAC7",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/434138273_3654836964774670_8447546768452126913_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFumdytP5LvRmGHjM_DWp5r1xs6G5lnuPbXGzobmWe49sXtjLkgI5BHIs9mWMMyvfpUlob_iMJ4tbwZ2W1U9-0n&_nc_ohc=3FiDCnAX314Q7kNvgELyttw&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AK_npBkVy5DyL0aewB3-STa&oh=00_AYDz-IkhL9tZbV9Kh3utnSamvSaE5bOsWBIqehwGYaS4Ow&oe=6744F2E1",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/433653035_3651529318438768_8080578743887285628_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG96Q9WTPoAlZC3eLw7yR6LzCYdIwPKZj7MJh0jA8pmPm3hGKru7OBS60Pg3DS3pL1VeAiFjBadxgnKiSMpCPoo&_nc_ohc=-bzLQmRYsb4Q7kNvgFzeFsd&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=AJvBwAyu7RQ8EOpgcw_G5nN&oh=00_AYAsUjIqz2EA3Z3KDdaGbRFsHLfzIycWoz1pkCrDzRgt1w&oe=6744DA05",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/433926319_3651529211772112_4843013574873592483_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFB9NXtHQ6ccIUDRilxTf8aQrCQrUDEzeJCsJCtQMTN4vY7Lmn7Re356s0RpmixW_rcyM-q82UEQ1b-5EbCkolk&_nc_ohc=IR041dq2G1kQ7kNvgFg9X7J&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=A07u2UJr-_PG2PNYv6iLEvW&oh=00_AYCL0Vt3MipsBYJN3WaFjEZr9hFtLSYGxBefHxe6PH4AoQ&oe=6744E9B2",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/432058429_3651529658438734_7366412490373152549_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH8IaVdCTHq91QybFn7NhBJ0jGGbkMnLHbSMYZuQycsdvO0RgQU_ujcjRiG3FJcx9KEgbxsbBUKX9HOxafq0Fzh&_nc_ohc=1vb_lKTtdmkQ7kNvgFBCgl4&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=Ayx7P8Dn56E8aSK_t9zRN5S&oh=00_AYB6102FYYF1EC4H1Mee2wbdiQVFPIT-Y3VFeMlqkN89vw&oe=67450665",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/420504991_3613352982256402_6181140023381626629_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGyf_8LRzqO4VbvuN_-_OIH5w89YveHfxXnDz1i94d_FZ8MLVD1GedUmQGklJ_zH-13C4zUQwwPv2Wkje8wGJjh&_nc_ohc=lYhtGFJ8eAAQ7kNvgHl_5N0&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=A8Ic8xGmauJLWQN-6sFRkrr&oh=00_AYDXTDW-xodfQYDfOlnRNSbbIHvtMkMWeGN3PExeGogwWg&oe=6744E8BC",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/432339608_3648970952027938_609061777982373831_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeECB7Hb_9u6okMCvlXUx0PwQfL6ZG7ZPa9B8vpkbtk9rwQRC9X5RcwwxFCwFWzU2ybE1rzfD5wizcPAare8-lTy&_nc_ohc=Le174IfuPl4Q7kNvgH8sSAA&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=AJfrdceEFmTeN5Xoz8vsEwQ&oh=00_AYC9q6w4iVUeGjC9Ib2gAnc9u033OiwILXm-Txu2wdrjwA&oe=6744EA5C",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/431914571_3644855292439504_6066512393345403150_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFFvqfeiiPmVW20v3EJphweAlSXvOWe_fwCVJe85Z79_HIUMDgOYPnhXtPtbo8Hb3irpZM3p3eTut9BgCK5yTpH&_nc_ohc=W4arJBt3zLIQ7kNvgFhaPzh&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=Ai8KTVpQvZ2ECOohoqkcOr7&oh=00_AYD8tAqJmNsjwbxKD_kTbD6VAWRM70dz9djOjVVu137wHQ&oe=6744E3CE",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/430150043_3644740992450934_5422513677100346254_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH3wR_PRWdPHTGBEeAe8Hl88kc7FozZgYHyRzsWjNmBgYnLU-S2levIvWTpp6G0auU_7H4lPUGvdW38zekw3wEm&_nc_ohc=GuyO8CIzSokQ7kNvgGcie82&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=A4VVH0THZ3wIxjIgLvAkwbl&oh=00_AYBtYIfMUyDOnTQElghtrxQWFtVy0ID9gxNc8GRkskblGg&oe=6744EB40",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/420685957_3614030525521981_432666881144471230_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeHPv3-HsVHsuOSRlmU2XYQPj1arjDjITSePVquMOMhNJ9Ps9hxTiYjJ82bNdvjGEHWND9YT21IzmllA9RV85gT0&_nc_ohc=YYmGvgbyxDEQ7kNvgFF2IMF&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=A_XM2u_v_GnPMH5yfBE7mAf&oh=00_AYDBidpioKw5kzrCLnxm9FOG0dXVgHu5ljG9PfaHEO4Jdw&oe=6744EAC7",
  ];

  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <>
      <div className="photo-gallery lg:w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-center">Photo Gallery</h2>
        <div className="grid grid-cols-3 gap-4 lg:gap-y-[50px] mt-[50px]">
          {photos.slice(0, showAll ? photos.length : 6).map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-[360px] h-[360px] rounded-md bg-cover object-cover border-[1px] border-blue-100 p-2"
            />
          ))}
        </div>
        <button
          onClick={handleToggle}
          className="mt-8 btn btn-secondary text-white px-4 py-2 rounded flex mx-auto"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </>
  );
};

export default PhotoGallery;
