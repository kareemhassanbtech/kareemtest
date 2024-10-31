/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        color: {
          colors: {
            absolute: {
              dark: {
                'ads - dark': 'rgb(255, 255, 255)',
                'ads - light': 'rgb(0, 0, 0)',
                'mylo - dark': 'rgb(255, 255, 255)',
                'mylo - light': 'rgb(0, 0, 0)',
                'retail - dark': 'rgb(255, 255, 255)',
                'retail - light': 'rgb(0, 0, 0)'
              },
              light: {
                'ads - dark': 'rgb(0, 0, 0)',
                'ads - light': 'rgb(255, 255, 255)',
                'mylo - dark': 'rgb(0, 0, 0)',
                'mylo - light': 'rgb(255, 255, 255)',
                'retail - dark': 'rgb(0, 0, 0)',
                'retail - light': 'rgb(255, 255, 255)'
              }
            },
            danger: {
              d1: {
                'ads - dark': 'rgb(252, 176, 163)',
                'ads - light': 'rgb(194, 32, 37)',
                'mylo - dark': 'rgb(255, 183, 175)',
                'mylo - light': 'rgb(203, 55, 61)',
                'retail - dark': 'rgb(252, 176, 163)',
                'retail - light': 'rgb(194, 32, 37)'
              },
              d2: {
                'ads - dark': 'rgb(255, 216, 208)',
                'ads - light': 'rgb(149, 32, 30)',
                'mylo - dark': 'rgb(255, 219, 214)',
                'mylo - light': 'rgb(155, 47, 49)',
                'retail - dark': 'rgb(255, 216, 208)',
                'retail - light': 'rgb(149, 32, 30)'
              },
              d3: {
                'ads - dark': 'rgb(255, 235, 231)',
                'ads - light': 'rgb(85, 26, 21)',
                'mylo - dark': 'rgb(255, 237, 235)',
                'mylo - light': 'rgb(88, 32, 31)',
                'retail - dark': 'rgb(255, 235, 231)',
                'retail - light': 'rgb(85, 26, 21)'
              },
              l0: {
                'ads - dark': 'rgb(226, 66, 59)',
                'ads - light': 'rgb(218, 30, 40)',
                'mylo - dark': 'rgb(234, 85, 85)',
                'mylo - light': 'rgb(228, 59, 68)',
                'retail - dark': 'rgb(226, 66, 59)',
                'retail - light': 'rgb(218, 30, 40)'
              },
              l1: {
                'ads - dark': 'rgb(218, 30, 40)',
                'ads - light': 'rgb(230, 80, 69)',
                'mylo - dark': 'rgb(228, 59, 68)',
                'mylo - light': 'rgb(237, 96, 93)',
                'retail - dark': 'rgb(218, 30, 40)',
                'retail - light': 'rgb(230, 80, 69)'
              },
              l2: {
                'ads - dark': 'rgb(171, 32, 34)',
                'ads - light': 'rgb(239, 115, 99)',
                'mylo - dark': 'rgb(179, 51, 55)',
                'mylo - light': 'rgb(245, 127, 120)',
                'retail - dark': 'rgb(171, 32, 34)',
                'retail - light': 'rgb(239, 115, 99)'
              },
              l3: {
                'ads - dark': 'rgb(149, 32, 30)',
                'ads - light': 'rgb(252, 176, 163)',
                'mylo - dark': 'rgb(155, 47, 49)',
                'mylo - light': 'rgb(255, 183, 175)',
                'retail - dark': 'rgb(149, 32, 30)',
                'retail - light': 'rgb(252, 176, 163)'
              },
              l4: {
                'ads - dark': 'rgb(85, 26, 21)',
                'ads - light': 'rgb(255, 226, 220)',
                'mylo - dark': 'rgb(88, 32, 31)',
                'mylo - light': 'rgb(255, 228, 225)',
                'retail - dark': 'rgb(85, 26, 21)',
                'retail - light': 'rgb(255, 226, 220)'
              },
              l5: {
                'ads - dark': 'rgb(64, 22, 17)',
                'ads - light': 'rgb(255, 245, 243)',
                'mylo - dark': 'rgb(66, 27, 25)',
                'mylo - light': 'rgb(255, 246, 245)',
                'retail - dark': 'rgb(64, 22, 17)',
                'retail - light': 'rgb(255, 245, 243)'
              }
            },
            info: {
              d1: {
                'ads - dark': 'rgb(186, 211, 251)',
                'ads - light': 'rgb(36, 134, 216)',
                'mylo - dark': 'rgb(184, 218, 247)',
                'mylo - light': 'rgb(27, 147, 207)',
                'retail - dark': 'rgb(186, 211, 251)',
                'retail - light': 'rgb(36, 134, 216)'
              },
              d2: {
                'ads - dark': 'rgb(221, 233, 253)',
                'ads - light': 'rgb(38, 103, 163)',
                'mylo - dark': 'rgb(220, 237, 251)',
                'mylo - light': 'rgb(33, 112, 157)',
                'retail - dark': 'rgb(221, 233, 253)',
                'retail - light': 'rgb(38, 103, 163)'
              },
              d3: {
                'ads - dark': 'rgb(238, 244, 254)',
                'ads - light': 'rgb(31, 59, 90)',
                'mylo - dark': 'rgb(238, 246, 253)',
                'mylo - light': 'rgb(29, 64, 87)',
                'retail - dark': 'rgb(238, 244, 254)',
                'retail - light': 'rgb(31, 59, 90)'
              },
              l0: {
                'ads - dark': 'rgb(77, 160, 244)',
                'ads - light': 'rgb(33, 150, 243)',
                'mylo - dark': 'rgb(71, 174, 236)',
                'mylo - light': 'rgb(14, 165, 233)',
                'retail - dark': 'rgb(77, 160, 244)',
                'retail - light': 'rgb(33, 150, 243)'
              },
              l1: {
                'ads - dark': 'rgb(33, 150, 243)',
                'ads - light': 'rgb(91, 165, 245)',
                'mylo - dark': 'rgb(14, 165, 233)',
                'mylo - light': 'rgb(87, 178, 237)',
                'retail - dark': 'rgb(33, 150, 243)',
                'retail - light': 'rgb(91, 165, 245)'
              },
              l2: {
                'ads - dark': 'rgb(37, 118, 189)',
                'ads - light': 'rgb(128, 180, 247)',
                'mylo - dark': 'rgb(31, 130, 182)',
                'mylo - light': 'rgb(124, 191, 240)',
                'retail - dark': 'rgb(37, 118, 189)',
                'retail - light': 'rgb(128, 180, 247)'
              },
              l3: {
                'ads - dark': 'rgb(38, 103, 163)',
                'ads - light': 'rgb(186, 211, 251)',
                'mylo - dark': 'rgb(33, 112, 157)',
                'mylo - light': 'rgb(184, 218, 247)',
                'retail - dark': 'rgb(38, 103, 163)',
                'retail - light': 'rgb(186, 211, 251)'
              },
              l4: {
                'ads - dark': 'rgb(31, 59, 90)',
                'ads - light': 'rgb(230, 238, 254)',
                'mylo - dark': 'rgb(29, 64, 87)',
                'mylo - light': 'rgb(229, 241, 252)',
                'retail - dark': 'rgb(31, 59, 90)',
                'retail - light': 'rgb(230, 238, 254)'
              },
              l5: {
                'ads - dark': 'rgb(27, 45, 68)',
                'ads - light': 'rgb(247, 250, 255)',
                'mylo - dark': 'rgb(25, 49, 66)',
                'mylo - light': 'rgb(246, 250, 254)',
                'retail - dark': 'rgb(27, 45, 68)',
                'retail - light': 'rgb(247, 250, 255)'
              }
            },
            neutral: {
              d1: {
                'ads - dark': 'rgb(215, 215, 215)',
                'ads - light': 'rgb(141, 141, 141)',
                'mylo - dark': 'rgb(218, 218, 218)',
                'mylo - light': 'rgb(147, 147, 146)',
                'retail - dark': 'rgb(215, 215, 215)',
                'retail - light': 'rgb(141, 141, 141)'
              },
              d2: {
                'ads - dark': 'rgb(235, 235, 235)',
                'ads - light': 'rgb(108, 108, 108)',
                'mylo - dark': 'rgb(236, 236, 236)',
                'mylo - light': 'rgb(112, 112, 112)',
                'retail - dark': 'rgb(235, 235, 235)',
                'retail - light': 'rgb(108, 108, 108)'
              },
              d3: {
                'ads - dark': 'rgb(245, 245, 245)',
                'ads - light': 'rgb(62, 62, 62)',
                'mylo - dark': 'rgb(246, 246, 246)',
                'mylo - light': 'rgb(64, 64, 64)',
                'retail - dark': 'rgb(245, 245, 245)',
                'retail - light': 'rgb(62, 62, 62)'
              },
              l0: {
                'ads - dark': 'rgb(167, 167, 167)',
                'ads - light': 'rgb(158, 158, 158)',
                'mylo - dark': 'rgb(174, 174, 173)',
                'mylo - light': 'rgb(165, 165, 164)',
                'retail - dark': 'rgb(167, 167, 167)',
                'retail - light': 'rgb(158, 158, 158)'
              },
              l1: {
                'ads - dark': 'rgb(158, 158, 158)',
                'ads - light': 'rgb(172, 172, 172)',
                'mylo - dark': 'rgb(165, 165, 164)',
                'mylo - light': 'rgb(178, 178, 177)',
                'retail - dark': 'rgb(158, 158, 158)',
                'retail - light': 'rgb(172, 172, 172)'
              },
              l2: {
                'ads - dark': 'rgb(124, 124, 124)',
                'ads - light': 'rgb(186, 186, 186)',
                'mylo - dark': 'rgb(130, 130, 129)',
                'mylo - light': 'rgb(191, 191, 190)',
                'retail - dark': 'rgb(124, 124, 124)',
                'retail - light': 'rgb(186, 186, 186)'
              },
              l3: {
                'ads - dark': 'rgb(108, 108, 108)',
                'ads - light': 'rgb(215, 215, 215)',
                'mylo - dark': 'rgb(112, 112, 112)',
                'mylo - light': 'rgb(218, 218, 218)',
                'retail - dark': 'rgb(108, 108, 108)',
                'retail - light': 'rgb(215, 215, 215)'
              },
              l4: {
                'ads - dark': 'rgb(62, 62, 62)',
                'ads - light': 'rgb(240, 240, 240)',
                'mylo - dark': 'rgb(64, 64, 64)',
                'mylo - light': 'rgb(241, 241, 241)',
                'retail - dark': 'rgb(62, 62, 62)',
                'retail - light': 'rgb(240, 240, 240)'
              },
              l5: {
                'ads - dark': 'rgb(47, 47, 47)',
                'ads - light': 'rgb(250, 250, 250)',
                'mylo - dark': 'rgb(49, 49, 49)',
                'mylo - light': 'rgb(250, 250, 250)',
                'retail - dark': 'rgb(47, 47, 47)',
                'retail - light': 'rgb(250, 250, 250)'
              }
            },
            'primary-supportive': {
              d1: {
                'ads - dark': 'rgb(254, 229, 220)',
                'ads - light': 'rgb(220, 169, 151)',
                'mylo - dark': 'rgb(211, 212, 255)',
                'mylo - light': 'rgb(123, 135, 226)',
                'retail - dark': 'rgb(254, 230, 220)',
                'retail - light': 'rgb(220, 172, 151)'
              },
              d2: {
                'ads - dark': 'rgb(255, 242, 237)',
                'ads - light': 'rgb(167, 129, 115)',
                'mylo - dark': 'rgb(233, 233, 255)',
                'mylo - light': 'rgb(95, 103, 171)',
                'retail - dark': 'rgb(255, 242, 237)',
                'retail - light': 'rgb(167, 131, 115)'
              },
              d3: {
                'ads - dark': 'rgb(255, 248, 246)',
                'ads - light': 'rgb(92, 73, 65)',
                'mylo - dark': 'rgb(244, 244, 255)',
                'mylo - light': 'rgb(56, 59, 95)',
                'retail - dark': 'rgb(255, 249, 246)',
                'retail - light': 'rgb(92, 74, 65)'
              },
              l0: {
                'ads - dark': 'rgb(249, 197, 177)',
                'ads - light': 'rgb(248, 190, 169)',
                'mylo - dark': 'rgb(151, 161, 255)',
                'mylo - light': 'rgb(138, 151, 255)',
                'retail - dark': 'rgb(249, 199, 177)',
                'retail - light': 'rgb(248, 193, 169)'
              },
              l1: {
                'ads - dark': 'rgb(248, 190, 169)',
                'ads - light': 'rgb(250, 200, 182)',
                'mylo - dark': 'rgb(138, 151, 255)',
                'mylo - light': 'rgb(158, 166, 255)',
                'retail - dark': 'rgb(248, 193, 169)',
                'retail - light': 'rgb(250, 202, 182)'
              },
              l2: {
                'ads - dark': 'rgb(193, 149, 133)',
                'ads - light': 'rgb(252, 210, 194)',
                'mylo - dark': 'rgb(109, 119, 199)',
                'mylo - light': 'rgb(176, 181, 255)',
                'retail - dark': 'rgb(193, 151, 133)',
                'retail - light': 'rgb(252, 212, 194)'
              },
              l3: {
                'ads - dark': 'rgb(167, 129, 115)',
                'ads - light': 'rgb(254, 229, 220)',
                'mylo - dark': 'rgb(95, 103, 171)',
                'mylo - light': 'rgb(211, 212, 255)',
                'retail - dark': 'rgb(167, 131, 115)',
                'retail - light': 'rgb(254, 230, 220)'
              },
              l4: {
                'ads - dark': 'rgb(92, 73, 65)',
                'ads - light': 'rgb(255, 245, 242)',
                'mylo - dark': 'rgb(56, 59, 95)',
                'mylo - light': 'rgb(239, 239, 255)',
                'retail - dark': 'rgb(92, 74, 65)',
                'retail - light': 'rgb(255, 246, 242)'
              },
              l5: {
                'ads - dark': 'rgb(69, 55, 50)',
                'ads - light': 'rgb(255, 252, 251)',
                'mylo - dark': 'rgb(44, 46, 71)',
                'mylo - light': 'rgb(250, 249, 255)',
                'retail - dark': 'rgb(69, 56, 50)',
                'retail - light': 'rgb(255, 252, 250)'
              }
            },
            primary: {
              d1: {
                'ads - dark': 'rgb(248, 190, 169)',
                'ads - light': 'rgb(192, 81, 46)',
                'mylo - dark': 'rgb(158, 157, 173)',
                'mylo - light': 'rgb(27, 29, 57)',
                'retail - dark': 'rgb(184, 175, 209)',
                'retail - light': 'rgb(72, 61, 126)'
              },
              d2: {
                'ads - dark': 'rgb(253, 222, 211)',
                'ads - light': 'rgb(147, 64, 37)',
                'mylo - dark': 'rgb(206, 205, 213)',
                'mylo - light': 'rgb(23, 24, 45)',
                'retail - dark': 'rgb(219, 214, 232)',
                'retail - light': 'rgb(57, 48, 97)'
              },
              d3: {
                'ads - dark': 'rgb(255, 239, 233)',
                'ads - light': 'rgb(83, 40, 25)',
                'mylo - dark': 'rgb(230, 230, 234)',
                'mylo - light': 'rgb(17, 16, 29)',
                'retail - dark': 'rgb(237, 235, 244)',
                'retail - light': 'rgb(36, 30, 56)'
              },
              l0: {
                'ads - dark': 'rgb(223, 108, 69)',
                'ads - light': 'rgb(216, 90, 50)',
                'mylo - dark': 'rgb(49, 50, 80)',
                'mylo - light': 'rgb(29, 31, 63)',
                'retail - dark': 'rgb(97, 84, 152)',
                'retail - light': 'rgb(79, 67, 141)'
              },
              l1: {
                'ads - dark': 'rgb(216, 90, 50)',
                'ads - light': 'rgb(226, 116, 79)',
                'mylo - dark': 'rgb(29, 31, 63)',
                'mylo - light': 'rgb(60, 59, 89)',
                'retail - dark': 'rgb(79, 67, 141)',
                'retail - light': 'rgb(106, 92, 158)'
              },
              l2: {
                'ads - dark': 'rgb(169, 73, 42)',
                'ads - light': 'rgb(235, 141, 108)',
                'mylo - dark': 'rgb(25, 26, 51)',
                'mylo - light': 'rgb(91, 90, 116)',
                'retail - dark': 'rgb(64, 54, 111)',
                'retail - light': 'rgb(132, 119, 175)'
              },
              l3: {
                'ads - dark': 'rgb(147, 64, 37)',
                'ads - light': 'rgb(248, 190, 169)',
                'mylo - dark': 'rgb(23, 24, 45)',
                'mylo - light': 'rgb(158, 157, 173)',
                'retail - dark': 'rgb(57, 48, 97)',
                'retail - light': 'rgb(184, 175, 209)'
              },
              l4: {
                'ads - dark': 'rgb(83, 40, 25)',
                'ads - light': 'rgb(254, 230, 222)',
                'mylo - dark': 'rgb(17, 16, 29)',
                'mylo - light': 'rgb(218, 217, 224)',
                'retail - dark': 'rgb(36, 30, 56)',
                'retail - light': 'rgb(228, 224, 238)'
              },
              l5: {
                'ads - dark': 'rgb(63, 32, 21)',
                'ads - light': 'rgb(255, 247, 244)',
                'mylo - dark': 'rgb(14, 13, 24)',
                'mylo - light': 'rgb(242, 242, 244)',
                'retail - dark': 'rgb(29, 25, 43)',
                'retail - light': 'rgb(246, 245, 249)'
              }
            },
            'secondary-supportive': {
              d1: {
                'ads - dark': 'rgb(211, 210, 213)',
                'ads - light': 'rgb(133, 131, 136)',
                'mylo - dark': 'rgb(255, 234, 250)',
                'mylo - light': 'rgb(226, 179, 216)',
                'retail - dark': 'rgb(211, 210, 213)',
                'retail - light': 'rgb(133, 131, 136)'
              },
              d2: {
                'ads - dark': 'rgb(233, 233, 234)',
                'ads - light': 'rgb(102, 101, 105)',
                'mylo - dark': 'rgb(255, 244, 253)',
                'mylo - light': 'rgb(171, 136, 163)',
                'retail - dark': 'rgb(233, 233, 234)',
                'retail - light': 'rgb(102, 101, 105)'
              },
              d3: {
                'ads - dark': 'rgb(244, 244, 244)',
                'ads - light': 'rgb(59, 58, 60)',
                'mylo - dark': 'rgb(255, 250, 254)',
                'mylo - light': 'rgb(94, 76, 90)',
                'retail - dark': 'rgb(244, 244, 244)',
                'retail - light': 'rgb(59, 58, 60)'
              },
              l0: {
                'ads - dark': 'rgb(159, 157, 163)',
                'ads - light': 'rgb(149, 147, 153)',
                'mylo - dark': 'rgb(255, 206, 244)',
                'mylo - light': 'rgb(255, 201, 243)',
                'retail - dark': 'rgb(159, 157, 163)',
                'retail - light': 'rgb(149, 147, 153)'
              },
              l1: {
                'ads - dark': 'rgb(149, 147, 153)',
                'ads - light': 'rgb(164, 163, 168)',
                'mylo - dark': 'rgb(255, 201, 243)',
                'mylo - light': 'rgb(255, 209, 245)',
                'retail - dark': 'rgb(149, 147, 153)',
                'retail - light': 'rgb(164, 163, 168)'
              },
              l2: {
                'ads - dark': 'rgb(117, 116, 120)',
                'ads - light': 'rgb(180, 178, 183)',
                'mylo - dark': 'rgb(198, 157, 189)',
                'mylo - light': 'rgb(255, 217, 247)',
                'retail - dark': 'rgb(117, 116, 120)',
                'retail - light': 'rgb(180, 178, 183)'
              },
              l3: {
                'ads - dark': 'rgb(102, 101, 105)',
                'ads - light': 'rgb(211, 210, 213)',
                'mylo - dark': 'rgb(171, 136, 163)',
                'mylo - light': 'rgb(255, 234, 250)',
                'retail - dark': 'rgb(102, 101, 105)',
                'retail - light': 'rgb(211, 210, 213)'
              },
              l4: {
                'ads - dark': 'rgb(59, 58, 60)',
                'ads - light': 'rgb(238, 238, 239)',
                'mylo - dark': 'rgb(94, 76, 90)',
                'mylo - light': 'rgb(255, 247, 253)',
                'retail - dark': 'rgb(59, 58, 60)',
                'retail - light': 'rgb(238, 238, 239)'
              },
              l5: {
                'ads - dark': 'rgb(45, 45, 46)',
                'ads - light': 'rgb(250, 249, 250)',
                'mylo - dark': 'rgb(71, 58, 68)',
                'mylo - light': 'rgb(255, 252, 254)',
                'retail - dark': 'rgb(45, 45, 46)',
                'retail - light': 'rgb(250, 249, 250)'
              }
            },
            secondary: {
              d1: {
                'ads - dark': 'rgb(184, 175, 209)',
                'ads - light': 'rgb(72, 61, 126)',
                'mylo - dark': 'rgb(252, 240, 189)',
                'mylo - light': 'rgb(213, 195, 78)',
                'retail - dark': 'rgb(248, 193, 169)',
                'retail - light': 'rgb(193, 89, 46)'
              },
              d2: {
                'ads - dark': 'rgb(219, 214, 232)',
                'ads - light': 'rgb(57, 48, 97)',
                'mylo - dark': 'rgb(254, 248, 222)',
                'mylo - light': 'rgb(162, 148, 62)',
                'retail - dark': 'rgb(253, 224, 212)',
                'retail - light': 'rgb(148, 70, 38)'
              },
              d3: {
                'ads - dark': 'rgb(237, 235, 244)',
                'ads - light': 'rgb(36, 30, 56)',
                'mylo - dark': 'rgb(255, 251, 238)',
                'mylo - light': 'rgb(90, 82, 39)',
                'retail - dark': 'rgb(255, 239, 233)',
                'retail - light': 'rgb(84, 43, 25)'
              },
              l0: {
                'ads - dark': 'rgb(97, 84, 152)',
                'ads - light': 'rgb(79, 67, 141)',
                'mylo - dark': 'rgb(243, 222, 105)',
                'mylo - light': 'rgb(240, 219, 86)',
                'retail - dark': 'rgb(224, 115, 70)',
                'retail - light': 'rgb(217, 99, 50)'
              },
              l1: {
                'ads - dark': 'rgb(79, 67, 141)',
                'ads - light': 'rgb(106, 92, 158)',
                'mylo - dark': 'rgb(240, 219, 86)',
                'mylo - light': 'rgb(244, 224, 114)',
                'retail - dark': 'rgb(217, 99, 50)',
                'retail - light': 'rgb(227, 123, 79)'
              },
              l2: {
                'ads - dark': 'rgb(64, 54, 111)',
                'ads - light': 'rgb(132, 119, 175)',
                'mylo - dark': 'rgb(187, 171, 70)',
                'mylo - light': 'rgb(247, 229, 140)',
                'retail - dark': 'rgb(170, 79, 42)',
                'retail - light': 'rgb(235, 147, 109)'
              },
              l3: {
                'ads - dark': 'rgb(57, 48, 97)',
                'ads - light': 'rgb(184, 175, 209)',
                'mylo - dark': 'rgb(162, 148, 62)',
                'mylo - light': 'rgb(252, 240, 189)',
                'retail - dark': 'rgb(148, 70, 38)',
                'retail - light': 'rgb(248, 193, 169)'
              },
              l4: {
                'ads - dark': 'rgb(36, 30, 56)',
                'ads - light': 'rgb(228, 224, 238)',
                'mylo - dark': 'rgb(90, 82, 39)',
                'mylo - light': 'rgb(255, 249, 230)',
                'retail - dark': 'rgb(84, 43, 25)',
                'retail - light': 'rgb(254, 232, 222)'
              },
              l5: {
                'ads - dark': 'rgb(29, 25, 43)',
                'ads - light': 'rgb(246, 245, 249)',
                'mylo - dark': 'rgb(68, 62, 31)',
                'mylo - light': 'rgb(255, 253, 247)',
                'retail - dark': 'rgb(64, 34, 21)',
                'retail - light': 'rgb(255, 247, 244)'
              }
            },
            success: {
              d1: {
                'ads - dark': 'rgb(169, 204, 172)',
                'ads - light': 'rgb(27, 115, 51)',
                'mylo - dark': 'rgb(191, 235, 199)',
                'mylo - light': 'rgb(71, 179, 106)',
                'retail - dark': 'rgb(179, 228, 203)',
                'retail - light': 'rgb(26, 165, 115)'
              },
              d2: {
                'ads - dark': 'rgb(212, 229, 213)',
                'ads - light': 'rgb(27, 88, 41)',
                'mylo - dark': 'rgb(223, 245, 227)',
                'mylo - light': 'rgb(58, 136, 82)',
                'retail - dark': 'rgb(217, 242, 229)',
                'retail - light': 'rgb(30, 126, 89)'
              },
              d3: {
                'ads - dark': 'rgb(233, 242, 234)',
                'ads - light': 'rgb(22, 52, 27)',
                'mylo - dark': 'rgb(239, 250, 241)',
                'mylo - light': 'rgb(38, 77, 48)',
                'retail - dark': 'rgb(236, 249, 242)',
                'retail - light': 'rgb(26, 71, 52)'
              },
              l0: {
                'ads - dark': 'rgb(58, 141, 75)',
                'ads - light': 'rgb(25, 128, 56)',
                'mylo - dark': 'rgb(100, 207, 131)',
                'mylo - light': 'rgb(77, 201, 118)',
                'retail - dark': 'rgb(66, 192, 140)',
                'retail - light': 'rgb(16, 185, 129)'
              },
              l1: {
                'ads - dark': 'rgb(25, 128, 56)',
                'ads - light': 'rgb(70, 147, 84)',
                'mylo - dark': 'rgb(77, 201, 118)',
                'mylo - light': 'rgb(111, 210, 138)',
                'retail - dark': 'rgb(16, 185, 129)',
                'retail - light': 'rgb(81, 196, 147)'
              },
              l2: {
                'ads - dark': 'rgb(27, 101, 46)',
                'ads - light': 'rgb(105, 166, 112)',
                'mylo - dark': 'rgb(65, 157, 93)',
                'mylo - light': 'rgb(139, 218, 158)',
                'retail - dark': 'rgb(29, 145, 102)',
                'retail - light': 'rgb(118, 207, 165)'
              },
              l3: {
                'ads - dark': 'rgb(27, 88, 41)',
                'ads - light': 'rgb(169, 204, 172)',
                'mylo - dark': 'rgb(58, 136, 82)',
                'mylo - light': 'rgb(191, 235, 199)',
                'retail - dark': 'rgb(30, 126, 89)',
                'retail - light': 'rgb(179, 228, 203)'
              },
              l4: {
                'ads - dark': 'rgb(22, 52, 27)',
                'ads - light': 'rgb(222, 236, 223)',
                'mylo - dark': 'rgb(38, 77, 48)',
                'mylo - light': 'rgb(231, 248, 234)',
                'retail - dark': 'rgb(26, 71, 52)',
                'retail - light': 'rgb(227, 245, 235)'
              },
              l5: {
                'ads - dark': 'rgb(19, 40, 22)',
                'ads - light': 'rgb(244, 248, 244)',
                'mylo - dark': 'rgb(31, 58, 38)',
                'mylo - light': 'rgb(247, 252, 248)',
                'retail - dark': 'rgb(23, 54, 40)',
                'retail - light': 'rgb(246, 252, 248)'
              }
            },
            tertiary: {
              d1: {
                'ads - dark': 'rgb(204, 229, 227)',
                'ads - light': 'rgb(112, 170, 167)',
                'mylo - dark': 'rgb(255, 210, 245)',
                'mylo - light': 'rgb(226, 123, 203)',
                'retail - dark': 'rgb(204, 229, 227)',
                'retail - light': 'rgb(112, 170, 167)'
              },
              d2: {
                'ads - dark': 'rgb(230, 242, 241)',
                'ads - light': 'rgb(87, 129, 127)',
                'mylo - dark': 'rgb(255, 233, 250)',
                'mylo - light': 'rgb(171, 95, 154)',
                'retail - dark': 'rgb(230, 242, 241)',
                'retail - light': 'rgb(87, 129, 127)'
              },
              d3: {
                'ads - dark': 'rgb(242, 249, 248)',
                'ads - light': 'rgb(51, 73, 71)',
                'mylo - dark': 'rgb(255, 244, 253)',
                'mylo - light': 'rgb(95, 56, 85)',
                'retail - dark': 'rgb(242, 249, 248)',
                'retail - light': 'rgb(51, 73, 71)'
              },
              l0: {
                'ads - dark': 'rgb(139, 198, 194)',
                'ads - light': 'rgb(125, 191, 187)',
                'mylo - dark': 'rgb(255, 150, 231)',
                'mylo - light': 'rgb(255, 137, 228)',
                'retail - dark': 'rgb(139, 198, 194)',
                'retail - light': 'rgb(125, 191, 187)'
              },
              l1: {
                'ads - dark': 'rgb(125, 191, 187)',
                'ads - light': 'rgb(145, 201, 197)',
                'mylo - dark': 'rgb(255, 137, 228)',
                'mylo - light': 'rgb(255, 156, 233)',
                'retail - dark': 'rgb(125, 191, 187)',
                'retail - light': 'rgb(145, 201, 197)'
              },
              l2: {
                'ads - dark': 'rgb(99, 150, 147)',
                'ads - light': 'rgb(165, 210, 207)',
                'mylo - dark': 'rgb(198, 109, 178)',
                'mylo - light': 'rgb(255, 175, 237)',
                'retail - dark': 'rgb(99, 150, 147)',
                'retail - light': 'rgb(165, 210, 207)'
              },
              l3: {
                'ads - dark': 'rgb(87, 129, 127)',
                'ads - light': 'rgb(204, 229, 227)',
                'mylo - dark': 'rgb(171, 95, 154)',
                'mylo - light': 'rgb(255, 210, 245)',
                'retail - dark': 'rgb(87, 129, 127)',
                'retail - light': 'rgb(204, 229, 227)'
              },
              l4: {
                'ads - dark': 'rgb(51, 73, 71)',
                'ads - light': 'rgb(236, 245, 245)',
                'mylo - dark': 'rgb(95, 56, 85)',
                'mylo - light': 'rgb(255, 238, 251)',
                'retail - dark': 'rgb(51, 73, 71)',
                'retail - light': 'rgb(236, 245, 245)'
              },
              l5: {
                'ads - dark': 'rgb(40, 55, 55)',
                'ads - light': 'rgb(248, 252, 251)',
                'mylo - dark': 'rgb(71, 43, 64)',
                'mylo - light': 'rgb(255, 249, 254)',
                'retail - dark': 'rgb(40, 55, 55)',
                'retail - light': 'rgb(248, 252, 251)'
              }
            },
            warning: {
              d1: {
                'ads - dark': 'rgb(251, 226, 171)',
                'ads - light': 'rgb(205, 165, 27)',
                'mylo - dark': 'rgb(255, 216, 167)',
                'mylo - light': 'rgb(218, 141, 17)',
                'retail - dark': 'rgb(251, 226, 171)',
                'retail - light': 'rgb(205, 165, 27)'
              },
              d2: {
                'ads - dark': 'rgb(254, 240, 213)',
                'ads - light': 'rgb(156, 126, 28)',
                'mylo - dark': 'rgb(255, 235, 211)',
                'mylo - light': 'rgb(166, 108, 21)',
                'retail - dark': 'rgb(254, 240, 213)',
                'retail - light': 'rgb(156, 126, 28)'
              },
              d3: {
                'ads - dark': 'rgb(255, 248, 234)',
                'ads - light': 'rgb(87, 71, 23)',
                'mylo - dark': 'rgb(255, 245, 233)',
                'mylo - light': 'rgb(92, 62, 20)',
                'retail - dark': 'rgb(255, 248, 234)',
                'retail - light': 'rgb(87, 71, 23)'
              },
              l0: {
                'ads - dark': 'rgb(234, 192, 60)',
                'ads - light': 'rgb(230, 185, 25)',
                'mylo - dark': 'rgb(248, 168, 51)',
                'mylo - light': 'rgb(245, 158, 11)',
                'retail - dark': 'rgb(234, 192, 60)',
                'retail - light': 'rgb(230, 185, 25)'
              },
              l1: {
                'ads - dark': 'rgb(230, 185, 25)',
                'ads - light': 'rgb(236, 195, 73)',
                'mylo - dark': 'rgb(245, 158, 11)',
                'mylo - light': 'rgb(250, 172, 65)',
                'retail - dark': 'rgb(230, 185, 25)',
                'retail - light': 'rgb(236, 195, 73)'
              },
              l2: {
                'ads - dark': 'rgb(180, 145, 28)',
                'ads - light': 'rgb(242, 205, 108)',
                'mylo - dark': 'rgb(191, 124, 20)',
                'mylo - light': 'rgb(254, 187, 101)',
                'retail - dark': 'rgb(180, 145, 28)',
                'retail - light': 'rgb(242, 205, 108)'
              },
              l3: {
                'ads - dark': 'rgb(156, 126, 28)',
                'ads - light': 'rgb(251, 226, 171)',
                'mylo - dark': 'rgb(166, 108, 21)',
                'mylo - light': 'rgb(255, 216, 167)',
                'retail - dark': 'rgb(156, 126, 28)',
                'retail - light': 'rgb(251, 226, 171)'
              },
              l4: {
                'ads - dark': 'rgb(87, 71, 23)',
                'ads - light': 'rgb(254, 244, 223)',
                'mylo - dark': 'rgb(92, 62, 20)',
                'mylo - light': 'rgb(255, 240, 222)',
                'retail - dark': 'rgb(87, 71, 23)',
                'retail - light': 'rgb(254, 244, 223)'
              },
              l5: {
                'ads - dark': 'rgb(66, 54, 20)',
                'ads - light': 'rgb(255, 251, 244)',
                'mylo - dark': 'rgb(70, 47, 18)',
                'mylo - light': 'rgb(255, 250, 244)',
                'retail - dark': 'rgb(66, 54, 20)',
                'retail - light': 'rgb(255, 251, 244)'
              }
            }
          }
        }
      },
      spacing: {
        'theme-font-size-small-ads': '16px',
        'theme-font-size-small-mylo': '16px',
        'theme-font-size-small-retail': '16px',
        'theme-font-size-xlarge-ads': '32px',
        'theme-font-size-xlarge-mylo': '32px',
        'theme-font-size-xlarge-retail': '32px',
        'theme-font-size-xsmall-ads': '14px',
        'theme-font-size-xsmall-mylo': '14px',
        'theme-font-size-xsmall-retail': '14px',
        'theme-font-size-xxsmall-ads': '12px',
        'theme-font-size-xxsmall-mylo': '12px',
        'theme-font-size-xxsmall-retail': '12px',
        'theme-font-size-2xlarge-ads': '40px',
        'theme-font-size-2xlarge-mylo': '40px',
        'theme-font-size-2xlarge-retail': '40px',
        'theme-font-size-3xlarge-ads': '48px',
        'theme-font-size-3xlarge-mylo': '48px',
        'theme-font-size-3xlarge-retail': '48px',
        'theme-font-size-large-ads': '24px',
        'theme-font-size-large-mylo': '24px',
        'theme-font-size-large-retail': '24px',
        'theme-font-size-medium-ads': '20px',
        'theme-font-size-medium-mylo': '20px',
        'theme-font-size-medium-retail': '20px',
        'theme-font-weight-bold-ads': '700px',
        'theme-font-weight-bold-mylo': '700px',
        'theme-font-weight-bold-retail': '700px',
        'theme-font-weight-medium-ads': '500px',
        'theme-font-weight-medium-mylo': '500px',
        'theme-font-weight-medium-retail': '500px',
        'theme-font-weight-regular-ads': '400px',
        'theme-font-weight-regular-mylo': '400px',
        'theme-font-weight-regular-retail': '400px',
        'theme-font-weight-semibold-ads': '600px',
        'theme-font-weight-semibold-mylo': '600px',
        'theme-font-weight-semibold-retail': '600px',
        'theme-border-width-large-ads': '3px',
        'theme-border-width-large-mylo': '3px',
        'theme-border-width-large-retail': '3px',
        'theme-border-width-medium-ads': '2px',
        'theme-border-width-medium-mylo': '2px',
        'theme-border-width-medium-retail': '2px',
        'theme-border-width-small-ads': '1.5px',
        'theme-border-width-small-mylo': '1.5px',
        'theme-border-width-small-retail': '1.5px',
        'theme-paragraph-spacing-large-ads': '32px',
        'theme-paragraph-spacing-large-mylo': '32px',
        'theme-paragraph-spacing-large-retail': '32px',
        'theme-paragraph-spacing-medium-ads': '16px',
        'theme-paragraph-spacing-medium-mylo': '16px',
        'theme-paragraph-spacing-medium-retail': '16px',
        'theme-paragraph-spacing-small-ads': '8px',
        'theme-paragraph-spacing-small-mylo': '8px',
        'theme-paragraph-spacing-small-retail': '8px',
        'theme-radii-2xlarge-ads': '56px',
        'theme-radii-2xlarge-mylo': '56px',
        'theme-radii-2xlarge-retail': '28px',
        'theme-radii-2xsmall-ads': '20px',
        'theme-radii-2xsmall-mylo': '8px',
        'theme-radii-2xsmall-retail': '4px',
        'theme-radii-3xlarge-ads': '64px',
        'theme-radii-3xlarge-mylo': '64px',
        'theme-radii-3xlarge-retail': '32px',
        'theme-radii-3xsmall-ads': '8px',
        'theme-radii-3xsmall-mylo': '4px',
        'theme-radii-3xsmall-retail': '2px',
        'theme-radii-full-ads': '999px',
        'theme-radii-full-mylo': '999px',
        'theme-radii-full-retail': '999px',
        'theme-radii-large-ads': '40px',
        'theme-radii-large-mylo': '40px',
        'theme-radii-large-retail': '20px',
        'theme-radii-medium-ads': '32px',
        'theme-radii-medium-mylo': '32px',
        'theme-radii-medium-retail': '16px',
        'theme-radii-none-ads': '0px',
        'theme-radii-none-mylo': '0px',
        'theme-radii-none-retail': '0px',
        'theme-radii-small-ads': '28px',
        'theme-radii-small-mylo': '20px',
        'theme-radii-small-retail': '8px',
        'theme-radii-xlarge-ads': '48px',
        'theme-radii-xlarge-mylo': '48px',
        'theme-radii-xlarge-retail': '24px',
        'theme-radii-xsmall-ads': '24px',
        'theme-radii-xsmall-mylo': '12px',
        'theme-radii-xsmall-retail': '6px',
        'theme-size-2xlarge-ads': '96px',
        'theme-size-2xlarge-mylo': '96px',
        'theme-size-2xlarge-retail': '96px',
        'theme-size-2xsmall-ads': '40px',
        'theme-size-2xsmall-mylo': '40px',
        'theme-size-2xsmall-retail': '40px',
        'theme-size-3xlarge-ads': '128px',
        'theme-size-3xlarge-mylo': '128px',
        'theme-size-3xlarge-retail': '128px',
        'theme-size-3xsmall-ads': '32px',
        'theme-size-3xsmall-mylo': '32px',
        'theme-size-3xsmall-retail': '32px',
        'theme-size-4xlarge-ads': '256px',
        'theme-size-4xlarge-mylo': '256px',
        'theme-size-4xlarge-retail': '256px',
        'theme-size-4xsmall-ads': '24px',
        'theme-size-4xsmall-mylo': '24px',
        'theme-size-4xsmall-retail': '24px',
        'theme-size-5xlarge-ads': '512px',
        'theme-size-5xlarge-mylo': '512px',
        'theme-size-5xlarge-retail': '512px',
        'theme-size-5xsmall-ads': '20px',
        'theme-size-5xsmall-mylo': '20px',
        'theme-size-5xsmall-retail': '20px',
        'theme-size-6xlarge-ads': '640px',
        'theme-size-6xlarge-mylo': '640px',
        'theme-size-6xlarge-retail': '640px',
        'theme-size-6xsmall-ads': '16px',
        'theme-size-6xsmall-mylo': '16px',
        'theme-size-6xsmall-retail': '16px',
        'theme-size-7xlarge-ads': '768px',
        'theme-size-7xlarge-mylo': '768px',
        'theme-size-7xlarge-retail': '768px',
        'theme-size-7xsmall-ads': '12px',
        'theme-size-7xsmall-mylo': '12px',
        'theme-size-7xsmall-retail': '12px',
        'theme-size-8xlarge-ads': '840px',
        'theme-size-8xlarge-mylo': '840px',
        'theme-size-8xlarge-retail': '840px',
        'theme-size-8xsmall-ads': '8px',
        'theme-size-8xsmall-mylo': '8px',
        'theme-size-8xsmall-retail': '8px',
        'theme-size-large-ads': '72px',
        'theme-size-large-mylo': '72px',
        'theme-size-large-retail': '72px',
        'theme-size-medium-ads': '64px',
        'theme-size-medium-mylo': '64px',
        'theme-size-medium-retail': '64px',
        'theme-size-small-ads': '56px',
        'theme-size-small-mylo': '56px',
        'theme-size-small-retail': '56px',
        'theme-size-xlarge-ads': '80px',
        'theme-size-xlarge-mylo': '80px',
        'theme-size-xlarge-retail': '80px',
        'theme-size-xsmall-ads': '48px',
        'theme-size-xsmall-mylo': '48px',
        'theme-size-xsmall-retail': '48px',
        'theme-space-2xlarge-ads': '40px',
        'theme-space-2xlarge-mylo': '40px',
        'theme-space-2xlarge-retail': '40px',
        'theme-space-2xsmall-ads': '8px',
        'theme-space-2xsmall-mylo': '8px',
        'theme-space-2xsmall-retail': '8px',
        'theme-space-3xlarge-ads': '48px',
        'theme-space-3xlarge-mylo': '48px',
        'theme-space-3xlarge-retail': '48px',
        'theme-space-3xsmall-ads': '4px',
        'theme-space-3xsmall-mylo': '4px',
        'theme-space-3xsmall-retail': '4px',
        'theme-space-large-ads': '24px',
        'theme-space-large-mylo': '24px',
        'theme-space-large-retail': '24px',
        'theme-space-medium-ads': '20px',
        'theme-space-medium-mylo': '20px',
        'theme-space-medium-retail': '20px',
        'theme-space-small-ads': '16px',
        'theme-space-small-mylo': '16px',
        'theme-space-small-retail': '16px',
        'theme-space-xlarge-ads': '32px',
        'theme-space-xlarge-mylo': '32px',
        'theme-space-xlarge-retail': '32px',
        'theme-space-xsmall-ads': '12px',
        'theme-space-xsmall-mylo': '12px',
        'theme-space-xsmall-retail': '12px'
      },
      dropShadow: {
        'Effect styles-box-shadow-large': '0px 10px 15px rgb(224, 227, 232)',
        'Effect styles-box-shadow-medium': '0px 4px 6px rgb(224, 227, 232)',
        'Effect styles-box-shadow-none': '0px 0px 0px rgb(0, 0, 0)',
        'Effect styles-box-shadow-xlarge': '0px 20px 25px rgb(224, 227, 232)',
        'Effect styles-box-shadow-xsmall': '0px 1px 3px rgb(224, 227, 232)',
        'Effect styles-box-shadow-xxlarge': '0px 25px 50px rgb(224, 227, 232)',
        'Effect styles-box-shadow-xxsmall': '0px 1px 2px rgb(224, 227, 232)'
      },
      fontFamily: {
        'Text styles-typography-body-large': 'Noto Sans',
        'Text styles-typography-body-medium': 'Noto Sans',
        'Text styles-typography-body-medium-striked': 'Noto Sans',
        'Text styles-typography-body-medium-underline': 'Noto Sans',
        'Text styles-typography-body-regular': 'Noto Sans',
        'Text styles-typography-body-regular-striked': 'Noto Sans',
        'Text styles-typography-body-regular-underline': 'Noto Sans',
        'Text styles-typography-body-small': 'Noto Sans',
        'Text styles-typography-body-small-striked': 'Noto Sans',
        'Text styles-typography-body-small-underline': 'Noto Sans',
        'Text styles-typography-headline-expressive': 'Noto Sans',
        'Text styles-typography-headline-extra-expressive': 'Noto Sans',
        'Text styles-typography-headline-large': 'Noto Sans',
        'Text styles-typography-headline-medium': 'Noto Sans',
        'Text styles-typography-headline-small': 'Noto Sans',
        'Text styles-typography-headline-xsmall': 'Noto Sans',
        'Text styles-typography-utility-button': 'Noto Sans',
        'Text styles-typography-utility-helper': 'Noto Sans',
        'Text styles-typography-utility-label': 'Noto Sans'
      },
      fontWeight: {
        'Text styles-typography-body-large': 'medium',
        'Text styles-typography-body-medium': 'medium',
        'Text styles-typography-body-medium-striked': 'medium',
        'Text styles-typography-body-medium-underline': 'medium',
        'Text styles-typography-body-regular': 'regular',
        'Text styles-typography-body-regular-striked': 'regular',
        'Text styles-typography-body-regular-underline': 'regular',
        'Text styles-typography-body-small': 'medium',
        'Text styles-typography-body-small-striked': 'medium',
        'Text styles-typography-body-small-underline': 'medium',
        'Text styles-typography-headline-expressive': 'semi-bold',
        'Text styles-typography-headline-extra-expressive': 'bold',
        'Text styles-typography-headline-large': 'semi-bold',
        'Text styles-typography-headline-medium': 'semi-bold',
        'Text styles-typography-headline-small': 'semi-bold',
        'Text styles-typography-headline-xsmall': 'bold',
        'Text styles-typography-utility-button': 'semi-bold',
        'Text styles-typography-utility-helper': 'medium',
        'Text styles-typography-utility-label': 'semi-bold'
      },
      textIndent: {
        'Text styles-typography-body-large': '0px',
        'Text styles-typography-body-medium': '0px',
        'Text styles-typography-body-medium-striked': '0px',
        'Text styles-typography-body-medium-underline': '0px',
        'Text styles-typography-body-regular': '0px',
        'Text styles-typography-body-regular-striked': '0px',
        'Text styles-typography-body-regular-underline': '0px',
        'Text styles-typography-body-small': '0px',
        'Text styles-typography-body-small-striked': '0px',
        'Text styles-typography-body-small-underline': '0px',
        'Text styles-typography-headline-expressive': '0px',
        'Text styles-typography-headline-extra-expressive': '0px',
        'Text styles-typography-headline-large': '0px',
        'Text styles-typography-headline-medium': '0px',
        'Text styles-typography-headline-small': '0px',
        'Text styles-typography-headline-xsmall': '0px',
        'Text styles-typography-utility-button': '0px',
        'Text styles-typography-utility-helper': '0px',
        'Text styles-typography-utility-label': '0px'
      },
      fontSize: {
        'Text styles-typography-body-large': '24px',
        'Text styles-typography-body-medium': '20px',
        'Text styles-typography-body-medium-striked': '20px',
        'Text styles-typography-body-medium-underline': '20px',
        'Text styles-typography-body-regular': '16px',
        'Text styles-typography-body-regular-striked': '16px',
        'Text styles-typography-body-regular-underline': '16px',
        'Text styles-typography-body-small': '14px',
        'Text styles-typography-body-small-striked': '14px',
        'Text styles-typography-body-small-underline': '14px',
        'Text styles-typography-headline-expressive': '40px',
        'Text styles-typography-headline-extra-expressive': '48px',
        'Text styles-typography-headline-large': '24px',
        'Text styles-typography-headline-medium': '20px',
        'Text styles-typography-headline-small': '16px',
        'Text styles-typography-headline-xsmall': '12px',
        'Text styles-typography-utility-button': '16px',
        'Text styles-typography-utility-helper': '12px',
        'Text styles-typography-utility-label': '12px'
      },
      lineHeight: {
        'Text styles-typography-body-large': '139.9999976158142%',
        'Text styles-typography-body-medium': '139.9999976158142%',
        'Text styles-typography-body-medium-striked': '139.9999976158142%',
        'Text styles-typography-body-medium-underline': '139.9999976158142%',
        'Text styles-typography-body-regular': '139.9999976158142%',
        'Text styles-typography-body-regular-striked': '139.9999976158142%',
        'Text styles-typography-body-regular-underline': '139.9999976158142%',
        'Text styles-typography-body-small': '139.9999976158142%',
        'Text styles-typography-body-small-striked': '139.9999976158142%',
        'Text styles-typography-body-small-underline': '139.9999976158142%',
        'Text styles-typography-headline-expressive': '139.9999976158142%',
        'Text styles-typography-headline-extra-expressive': '139.9999976158142%',
        'Text styles-typography-headline-large': '139.9999976158142%',
        'Text styles-typography-headline-medium': '139.9999976158142%',
        'Text styles-typography-headline-small': '139.9999976158142%',
        'Text styles-typography-headline-xsmall': '120.00000476837158%',
        'Text styles-typography-utility-button': '139.9999976158142%',
        'Text styles-typography-utility-helper': '139.9999976158142%',
        'Text styles-typography-utility-label': '139.9999976158142%'
      },
      letterSpacing: {
        'Text styles-typography-body-large': '0%',
        'Text styles-typography-body-medium': '0%',
        'Text styles-typography-body-medium-striked': '0%',
        'Text styles-typography-body-medium-underline': '0%',
        'Text styles-typography-body-regular': '0%',
        'Text styles-typography-body-regular-striked': '0%',
        'Text styles-typography-body-regular-underline': '0%',
        'Text styles-typography-body-small': '0%',
        'Text styles-typography-body-small-striked': '0%',
        'Text styles-typography-body-small-underline': '0%',
        'Text styles-typography-headline-expressive': '0%',
        'Text styles-typography-headline-extra-expressive': '0%',
        'Text styles-typography-headline-large': '0%',
        'Text styles-typography-headline-medium': '0%',
        'Text styles-typography-headline-small': '0%',
        'Text styles-typography-headline-xsmall': '0%',
        'Text styles-typography-utility-button': '0%',
        'Text styles-typography-utility-helper': '0%',
        'Text styles-typography-utility-label': '0%'
      }
    }
  }
}