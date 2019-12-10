import {
  BASE_END_POINT,
  EMPTY_JWT_ERROR_MESSAGE,
  USER_PLAYLIST_END_POINT,
  MOCK_ALL_DATA,
  STATUS_400_ERROR_MESSAGE,
  STATUS_401_ERROR_MESSAGE,
  STATUS_403_ERROR_MESSAGE,
  STATUS_500_ERROR_MESSAGE,
  STATUS_504_ERROR_MESSAGE, PLAYLIST_TRACKS_END_POINT, PLAYLIST_END_POINT
} from './config';
import {isValidSession} from './lib/auth';

const METHOD_GET = 'get';

const validateEmptyJWT = (jwt) => {
  if (!jwt) { throw new Error(EMPTY_JWT_ERROR_MESSAGE); }
};

const playlistsMockData = {
  "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q/playlists?offset=0&limit=20",
  "items": [
    {
      "collaborative": false,
      "description": "",
      "external_urls": {
        "spotify": "https://open.spotify.com/playlist/2ODMG6xNVCmVqhJc4my51W"
      },
      "href": "https://api.spotify.com/v1/playlists/2ODMG6xNVCmVqhJc4my51W",
      "id": "2ODMG6xNVCmVqhJc4my51W",
      "images": [
        {
          "height": 640,
          "url": "https://mosaic.scdn.co/640/7c359f03822255902f2b8a29a41c3a606fa57846ab67616d0000b27354ccfd097ec3c9335d030cdcab67616d0000b2737f401862bfe87b552a75308dab67616d0000b273edd0b8fdbf7fa74d320cadd8",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://mosaic.scdn.co/300/7c359f03822255902f2b8a29a41c3a606fa57846ab67616d0000b27354ccfd097ec3c9335d030cdcab67616d0000b2737f401862bfe87b552a75308dab67616d0000b273edd0b8fdbf7fa74d320cadd8",
          "width": 300
        },
        {
          "height": 60,
          "url": "https://mosaic.scdn.co/60/7c359f03822255902f2b8a29a41c3a606fa57846ab67616d0000b27354ccfd097ec3c9335d030cdcab67616d0000b2737f401862bfe87b552a75308dab67616d0000b273edd0b8fdbf7fa74d320cadd8",
          "width": 60
        }
      ],
      "name": "Bunker",
      "owner": {
        "display_name": "Ismael Terreno",
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "primary_color": null,
      "public": true,
      "snapshot_id": "MjMsZmI3M2M2N2U5ZjUxZGExNmZjYTQ3ODg5MDIwNDMzOGRjZGM5N2VmOQ==",
      "tracks": {
        "href": "https://api.spotify.com/v1/playlists/2ODMG6xNVCmVqhJc4my51W/tracks",
        "total": 21
      },
      "type": "playlist",
      "uri": "spotify:playlist:2ODMG6xNVCmVqhJc4my51W"
    }
  ],
  "limit": 20,
  "next": null,
  "offset": 0,
  "previous": null,
  "total": 1
};

const playlistTracksMockData = {
  "href": "https://api.spotify.com/v1/playlists/2ODMG6xNVCmVqhJc4my51W/tracks?offset=0&limit=100",
  "items": [
    {
      "added_at": "2018-08-11T12:14:29Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7f5Zgnp2spUuuzKplmRkt7"
              },
              "href": "https://api.spotify.com/v1/artists/7f5Zgnp2spUuuzKplmRkt7",
              "id": "7f5Zgnp2spUuuzKplmRkt7",
              "name": "Lost Frequencies",
              "type": "artist",
              "uri": "spotify:artist:7f5Zgnp2spUuuzKplmRkt7"
            }
          ],
          "available_markets": [
            "AR",
            "BO",
            "BR",
            "CL",
            "CO",
            "CR",
            "DO",
            "EC",
            "GT",
            "HN",
            "MX",
            "NI",
            "PA",
            "PE",
            "PY",
            "SV",
            "UY"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/57AJ70IWVE0pmPwNYBa4PT"
          },
          "href": "https://api.spotify.com/v1/albums/57AJ70IWVE0pmPwNYBa4PT",
          "id": "57AJ70IWVE0pmPwNYBa4PT",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27354ccfd097ec3c9335d030cdc",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0254ccfd097ec3c9335d030cdc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485154ccfd097ec3c9335d030cdc",
              "width": 64
            }
          ],
          "name": "Less Is More",
          "release_date": "2016-10-21",
          "release_date_precision": "day",
          "total_tracks": 16,
          "type": "album",
          "uri": "spotify:album:57AJ70IWVE0pmPwNYBa4PT"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7f5Zgnp2spUuuzKplmRkt7"
            },
            "href": "https://api.spotify.com/v1/artists/7f5Zgnp2spUuuzKplmRkt7",
            "id": "7f5Zgnp2spUuuzKplmRkt7",
            "name": "Lost Frequencies",
            "type": "artist",
            "uri": "spotify:artist:7f5Zgnp2spUuuzKplmRkt7"
          }
        ],
        "available_markets": [
          "AR",
          "BO",
          "BR",
          "CL",
          "CO",
          "CR",
          "EC",
          "GT",
          "HN",
          "MX",
          "NI",
          "PA",
          "PE",
          "PY",
          "SV",
          "UY"
        ],
        "disc_number": 1,
        "duration_ms": 138013,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "NLF711403495"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2glGP8kEfACgJdZ86kWxhN"
        },
        "href": "https://api.spotify.com/v1/tracks/2glGP8kEfACgJdZ86kWxhN",
        "id": "2glGP8kEfACgJdZ86kWxhN",
        "is_local": false,
        "name": "Are You With Me - Radio Edit",
        "popularity": 65,
        "preview_url": "https://p.scdn.co/mp3-preview/1f761f0911951f0ef401784d9f73f8db9c30cc9c?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 12,
        "type": "track",
        "uri": "spotify:track:2glGP8kEfACgJdZ86kWxhN"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:14:34Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6lB8vOoI4DRrrVxXwuV19c"
              },
              "href": "https://api.spotify.com/v1/artists/6lB8vOoI4DRrrVxXwuV19c",
              "id": "6lB8vOoI4DRrrVxXwuV19c",
              "name": "Mike Perry",
              "type": "artist",
              "uri": "spotify:artist:6lB8vOoI4DRrrVxXwuV19c"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4pgNeQfSctryAw4e0uESHe"
          },
          "href": "https://api.spotify.com/v1/albums/4pgNeQfSctryAw4e0uESHe",
          "id": "4pgNeQfSctryAw4e0uESHe",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737f401862bfe87b552a75308d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027f401862bfe87b552a75308d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517f401862bfe87b552a75308d",
              "width": 64
            }
          ],
          "name": "The Ocean (feat. Shy Martin)",
          "release_date": "2016-04-15",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:4pgNeQfSctryAw4e0uESHe"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6lB8vOoI4DRrrVxXwuV19c"
            },
            "href": "https://api.spotify.com/v1/artists/6lB8vOoI4DRrrVxXwuV19c",
            "id": "6lB8vOoI4DRrrVxXwuV19c",
            "name": "Mike Perry",
            "type": "artist",
            "uri": "spotify:artist:6lB8vOoI4DRrrVxXwuV19c"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7eCmccnRwPmRnWPw61x6jM"
            },
            "href": "https://api.spotify.com/v1/artists/7eCmccnRwPmRnWPw61x6jM",
            "id": "7eCmccnRwPmRnWPw61x6jM",
            "name": "SHY Martin",
            "type": "artist",
            "uri": "spotify:artist:7eCmccnRwPmRnWPw61x6jM"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 183414,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "SE3AA1600005"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2CPqh63wRVscbceKcPxwvv"
        },
        "href": "https://api.spotify.com/v1/tracks/2CPqh63wRVscbceKcPxwvv",
        "id": "2CPqh63wRVscbceKcPxwvv",
        "is_local": false,
        "name": "The Ocean (feat. Shy Martin)",
        "popularity": 75,
        "preview_url": "https://p.scdn.co/mp3-preview/1a30aea828638d6c2ca6051a6c2965bca66b383c?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2CPqh63wRVscbceKcPxwvv"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:14:45Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4YXycRbyyAE0wozTk7QMEq"
              },
              "href": "https://api.spotify.com/v1/artists/4YXycRbyyAE0wozTk7QMEq",
              "id": "4YXycRbyyAE0wozTk7QMEq",
              "name": "Matoma",
              "type": "artist",
              "uri": "spotify:artist:4YXycRbyyAE0wozTk7QMEq"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3AVfmawzu83sp94QW7CEGm"
              },
              "href": "https://api.spotify.com/v1/artists/3AVfmawzu83sp94QW7CEGm",
              "id": "3AVfmawzu83sp94QW7CEGm",
              "name": "Astrid S",
              "type": "artist",
              "uri": "spotify:artist:3AVfmawzu83sp94QW7CEGm"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5vYA5O6P4ESBwV1gN1orpi"
          },
          "href": "https://api.spotify.com/v1/albums/5vYA5O6P4ESBwV1gN1orpi",
          "id": "5vYA5O6P4ESBwV1gN1orpi",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273edd0b8fdbf7fa74d320cadd8",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02edd0b8fdbf7fa74d320cadd8",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851edd0b8fdbf7fa74d320cadd8",
              "width": 64
            }
          ],
          "name": "Running Out",
          "release_date": "2015-12-01",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5vYA5O6P4ESBwV1gN1orpi"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4YXycRbyyAE0wozTk7QMEq"
            },
            "href": "https://api.spotify.com/v1/artists/4YXycRbyyAE0wozTk7QMEq",
            "id": "4YXycRbyyAE0wozTk7QMEq",
            "name": "Matoma",
            "type": "artist",
            "uri": "spotify:artist:4YXycRbyyAE0wozTk7QMEq"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3AVfmawzu83sp94QW7CEGm"
            },
            "href": "https://api.spotify.com/v1/artists/3AVfmawzu83sp94QW7CEGm",
            "id": "3AVfmawzu83sp94QW7CEGm",
            "name": "Astrid S",
            "type": "artist",
            "uri": "spotify:artist:3AVfmawzu83sp94QW7CEGm"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 211200,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAYE1501074"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2H8LPaY3NSjmOFMH2Rygnz"
        },
        "href": "https://api.spotify.com/v1/tracks/2H8LPaY3NSjmOFMH2Rygnz",
        "id": "2H8LPaY3NSjmOFMH2Rygnz",
        "is_local": false,
        "name": "Running Out",
        "popularity": 60,
        "preview_url": "https://p.scdn.co/mp3-preview/befa2bc36a0fe3b7020c6f34dec0d9c97452410d?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2H8LPaY3NSjmOFMH2Rygnz"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:15:21Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4bL2B6hmLlMWnUEZnorEtG"
              },
              "href": "https://api.spotify.com/v1/artists/4bL2B6hmLlMWnUEZnorEtG",
              "id": "4bL2B6hmLlMWnUEZnorEtG",
              "name": "Felix Jaehn",
              "type": "artist",
              "uri": "spotify:artist:4bL2B6hmLlMWnUEZnorEtG"
            }
          ],
          "available_markets": [],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2DL4AOHc4MKvCHbUr544aU"
          },
          "href": "https://api.spotify.com/v1/albums/2DL4AOHc4MKvCHbUr544aU",
          "id": "2DL4AOHc4MKvCHbUr544aU",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273bf2d6e9bfe719343ad274ab0",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02bf2d6e9bfe719343ad274ab0",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851bf2d6e9bfe719343ad274ab0",
              "width": 64
            }
          ],
          "name": "I",
          "release_date": "2018-02-16",
          "release_date_precision": "day",
          "total_tracks": 25,
          "type": "album",
          "uri": "spotify:album:2DL4AOHc4MKvCHbUr544aU"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4bL2B6hmLlMWnUEZnorEtG"
            },
            "href": "https://api.spotify.com/v1/artists/4bL2B6hmLlMWnUEZnorEtG",
            "id": "4bL2B6hmLlMWnUEZnorEtG",
            "name": "Felix Jaehn",
            "type": "artist",
            "uri": "spotify:artist:4bL2B6hmLlMWnUEZnorEtG"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2TL8gYTNgD6nXkyuUdDrMg"
            },
            "href": "https://api.spotify.com/v1/artists/2TL8gYTNgD6nXkyuUdDrMg",
            "id": "2TL8gYTNgD6nXkyuUdDrMg",
            "name": "Jasmine Thompson",
            "type": "artist",
            "uri": "spotify:artist:2TL8gYTNgD6nXkyuUdDrMg"
          }
        ],
        "available_markets": [],
        "disc_number": 2,
        "duration_ms": 186146,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "DEUM71500425"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6ALHz0g1IDIedBZZknvbXr"
        },
        "href": "https://api.spotify.com/v1/tracks/6ALHz0g1IDIedBZZknvbXr",
        "id": "6ALHz0g1IDIedBZZknvbXr",
        "is_local": false,
        "name": "Ain't Nobody (Loves Me Better) (feat. Jasmine Thompson)",
        "popularity": 7,
        "preview_url": null,
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6ALHz0g1IDIedBZZknvbXr"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:15:38Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7DMveApC7UnC2NPfPvlHSU"
              },
              "href": "https://api.spotify.com/v1/artists/7DMveApC7UnC2NPfPvlHSU",
              "id": "7DMveApC7UnC2NPfPvlHSU",
              "name": "Cheat Codes",
              "type": "artist",
              "uri": "spotify:artist:7DMveApC7UnC2NPfPvlHSU"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3e7awlrlDSwF3iM0WBjGMp"
              },
              "href": "https://api.spotify.com/v1/artists/3e7awlrlDSwF3iM0WBjGMp",
              "id": "3e7awlrlDSwF3iM0WBjGMp",
              "name": "Little Mix",
              "type": "artist",
              "uri": "spotify:artist:3e7awlrlDSwF3iM0WBjGMp"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4DmPCrBlJGedbs6GW7EQ1m"
          },
          "href": "https://api.spotify.com/v1/albums/4DmPCrBlJGedbs6GW7EQ1m",
          "id": "4DmPCrBlJGedbs6GW7EQ1m",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273198d0d6659372adaa801ea4d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02198d0d6659372adaa801ea4d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851198d0d6659372adaa801ea4d",
              "width": 64
            }
          ],
          "name": "Only You (with Little Mix)",
          "release_date": "2018-06-22",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:4DmPCrBlJGedbs6GW7EQ1m"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7DMveApC7UnC2NPfPvlHSU"
            },
            "href": "https://api.spotify.com/v1/artists/7DMveApC7UnC2NPfPvlHSU",
            "id": "7DMveApC7UnC2NPfPvlHSU",
            "name": "Cheat Codes",
            "type": "artist",
            "uri": "spotify:artist:7DMveApC7UnC2NPfPvlHSU"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3e7awlrlDSwF3iM0WBjGMp"
            },
            "href": "https://api.spotify.com/v1/artists/3e7awlrlDSwF3iM0WBjGMp",
            "id": "3e7awlrlDSwF3iM0WBjGMp",
            "name": "Little Mix",
            "type": "artist",
            "uri": "spotify:artist:3e7awlrlDSwF3iM0WBjGMp"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 189401,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBHMU1800034"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/54l9GJGQ1UCFKe2tzt1Vxt"
        },
        "href": "https://api.spotify.com/v1/tracks/54l9GJGQ1UCFKe2tzt1Vxt",
        "id": "54l9GJGQ1UCFKe2tzt1Vxt",
        "is_local": false,
        "name": "Only You (with Little Mix)",
        "popularity": 73,
        "preview_url": "https://p.scdn.co/mp3-preview/a341e56ee109fd7c1b42c9e96d849679d2d83b0c?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:54l9GJGQ1UCFKe2tzt1Vxt"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:15:55Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3t5xRXzsuZmMDkQzgOX35S"
              },
              "href": "https://api.spotify.com/v1/artists/3t5xRXzsuZmMDkQzgOX35S",
              "id": "3t5xRXzsuZmMDkQzgOX35S",
              "name": "Robin Schulz",
              "type": "artist",
              "uri": "spotify:artist:3t5xRXzsuZmMDkQzgOX35S"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1SrvubPy1Dg2BWJyTMcmgr"
          },
          "href": "https://api.spotify.com/v1/albums/1SrvubPy1Dg2BWJyTMcmgr",
          "id": "1SrvubPy1Dg2BWJyTMcmgr",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273ec67f6776573462a1ad9ee2d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ec67f6776573462a1ad9ee2d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851ec67f6776573462a1ad9ee2d",
              "width": 64
            }
          ],
          "name": "Prayer",
          "release_date": "2014-09-16",
          "release_date_precision": "day",
          "total_tracks": 20,
          "type": "album",
          "uri": "spotify:album:1SrvubPy1Dg2BWJyTMcmgr"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3t5xRXzsuZmMDkQzgOX35S"
            },
            "href": "https://api.spotify.com/v1/artists/3t5xRXzsuZmMDkQzgOX35S",
            "id": "3t5xRXzsuZmMDkQzgOX35S",
            "name": "Robin Schulz",
            "type": "artist",
            "uri": "spotify:artist:3t5xRXzsuZmMDkQzgOX35S"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0E4gQj9bTIp0cycvzLBk5d"
            },
            "href": "https://api.spotify.com/v1/artists/0E4gQj9bTIp0cycvzLBk5d",
            "id": "0E4gQj9bTIp0cycvzLBk5d",
            "name": "Jasmine Thompson",
            "type": "artist",
            "uri": "spotify:artist:0E4gQj9bTIp0cycvzLBk5d"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 179960,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "DEA621400666"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4zLBcDtvYNVtF9fnG6lme3"
        },
        "href": "https://api.spotify.com/v1/tracks/4zLBcDtvYNVtF9fnG6lme3",
        "id": "4zLBcDtvYNVtF9fnG6lme3",
        "is_local": false,
        "name": "Sun Goes Down (feat. Jasmine Thompson) - Radio Mix",
        "popularity": 68,
        "preview_url": "https://p.scdn.co/mp3-preview/9eea19a9a84505f27e63534a8a876db6766da765?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:4zLBcDtvYNVtF9fnG6lme3"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:16:57Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4bL2B6hmLlMWnUEZnorEtG"
              },
              "href": "https://api.spotify.com/v1/artists/4bL2B6hmLlMWnUEZnorEtG",
              "id": "4bL2B6hmLlMWnUEZnorEtG",
              "name": "Felix Jaehn",
              "type": "artist",
              "uri": "spotify:artist:4bL2B6hmLlMWnUEZnorEtG"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2S56F6bIk01HboGbJJJ1IQ"
          },
          "href": "https://api.spotify.com/v1/albums/2S56F6bIk01HboGbJJJ1IQ",
          "id": "2S56F6bIk01HboGbJJJ1IQ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/7c359f03822255902f2b8a29a41c3a606fa57846",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/9c5dcdc3e7710efc668685449bb2501a08b99633",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/a1069ffbab71ef00fda1106e89eca1e8ea75e2df",
              "width": 64
            }
          ],
          "name": "I",
          "release_date": "2018-02-16",
          "release_date_precision": "day",
          "total_tracks": 25,
          "type": "album",
          "uri": "spotify:album:2S56F6bIk01HboGbJJJ1IQ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4bL2B6hmLlMWnUEZnorEtG"
            },
            "href": "https://api.spotify.com/v1/artists/4bL2B6hmLlMWnUEZnorEtG",
            "id": "4bL2B6hmLlMWnUEZnorEtG",
            "name": "Felix Jaehn",
            "type": "artist",
            "uri": "spotify:artist:4bL2B6hmLlMWnUEZnorEtG"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3IpvVrP3VLhruTmnququq7"
            },
            "href": "https://api.spotify.com/v1/artists/3IpvVrP3VLhruTmnququq7",
            "id": "3IpvVrP3VLhruTmnququq7",
            "name": "Mike Williams",
            "type": "artist",
            "uri": "spotify:artist:3IpvVrP3VLhruTmnququq7"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 166946,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "DEUM71716675"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6ULQ6ZRc7JuVutRMy6gfgc"
        },
        "href": "https://api.spotify.com/v1/tracks/6ULQ6ZRc7JuVutRMy6gfgc",
        "id": "6ULQ6ZRc7JuVutRMy6gfgc",
        "is_local": false,
        "name": "Feel Good",
        "popularity": 67,
        "preview_url": null,
        "track": true,
        "track_number": 10,
        "type": "track",
        "uri": "spotify:track:6ULQ6ZRc7JuVutRMy6gfgc"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:17:04Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1HBjj22wzbscIZ9sEb5dyf"
              },
              "href": "https://api.spotify.com/v1/artists/1HBjj22wzbscIZ9sEb5dyf",
              "id": "1HBjj22wzbscIZ9sEb5dyf",
              "name": "Jonas Blue",
              "type": "artist",
              "uri": "spotify:artist:1HBjj22wzbscIZ9sEb5dyf"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/55zQqrjWsFHRcI1mxlQSsZ"
          },
          "href": "https://api.spotify.com/v1/albums/55zQqrjWsFHRcI1mxlQSsZ",
          "id": "55zQqrjWsFHRcI1mxlQSsZ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/878ba99436cf33e59a71e55b2d5c8bea0a824a84",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/2bf284202d7aa42757b7ee3cfa253c65d38515ea",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/1f35d48408f2ff4c93eaf35c65d1fc9081f8aed3",
              "width": 64
            }
          ],
          "name": "Fast Car",
          "release_date": "2015-12-04",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:55zQqrjWsFHRcI1mxlQSsZ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1HBjj22wzbscIZ9sEb5dyf"
            },
            "href": "https://api.spotify.com/v1/artists/1HBjj22wzbscIZ9sEb5dyf",
            "id": "1HBjj22wzbscIZ9sEb5dyf",
            "name": "Jonas Blue",
            "type": "artist",
            "uri": "spotify:artist:1HBjj22wzbscIZ9sEb5dyf"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2zzpznMuhKlKlqh1ma7Sms"
            },
            "href": "https://api.spotify.com/v1/artists/2zzpznMuhKlKlqh1ma7Sms",
            "id": "2zzpznMuhKlKlqh1ma7Sms",
            "name": "Dakota",
            "type": "artist",
            "uri": "spotify:artist:2zzpznMuhKlKlqh1ma7Sms"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 212424,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBUM71507621"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2mCF8L0brIs88eH6Kf2h9p"
        },
        "href": "https://api.spotify.com/v1/tracks/2mCF8L0brIs88eH6Kf2h9p",
        "id": "2mCF8L0brIs88eH6Kf2h9p",
        "is_local": false,
        "name": "Fast Car",
        "popularity": 69,
        "preview_url": null,
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2mCF8L0brIs88eH6Kf2h9p"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:17:21Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3t5xRXzsuZmMDkQzgOX35S"
              },
              "href": "https://api.spotify.com/v1/artists/3t5xRXzsuZmMDkQzgOX35S",
              "id": "3t5xRXzsuZmMDkQzgOX35S",
              "name": "Robin Schulz",
              "type": "artist",
              "uri": "spotify:artist:3t5xRXzsuZmMDkQzgOX35S"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5XyJzEROSmup2TcWmVjTIt"
          },
          "href": "https://api.spotify.com/v1/albums/5XyJzEROSmup2TcWmVjTIt",
          "id": "5XyJzEROSmup2TcWmVjTIt",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733c9047f9aa5d0d1e03827039",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023c9047f9aa5d0d1e03827039",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513c9047f9aa5d0d1e03827039",
              "width": 64
            }
          ],
          "name": "Sugar",
          "release_date": "2015-09-25",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:5XyJzEROSmup2TcWmVjTIt"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3t5xRXzsuZmMDkQzgOX35S"
            },
            "href": "https://api.spotify.com/v1/artists/3t5xRXzsuZmMDkQzgOX35S",
            "id": "3t5xRXzsuZmMDkQzgOX35S",
            "name": "Robin Schulz",
            "type": "artist",
            "uri": "spotify:artist:3t5xRXzsuZmMDkQzgOX35S"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2ZKzqJz3pPfWKVRgz9b39j"
            },
            "href": "https://api.spotify.com/v1/artists/2ZKzqJz3pPfWKVRgz9b39j",
            "id": "2ZKzqJz3pPfWKVRgz9b39j",
            "name": "Ilsey",
            "type": "artist",
            "uri": "spotify:artist:2ZKzqJz3pPfWKVRgz9b39j"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 209208,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "DEA621500407"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0tDC3KJPPu5eonGTtCURpq"
        },
        "href": "https://api.spotify.com/v1/tracks/0tDC3KJPPu5eonGTtCURpq",
        "id": "0tDC3KJPPu5eonGTtCURpq",
        "is_local": false,
        "name": "Headlights (feat. Ilsey)",
        "popularity": 61,
        "preview_url": "https://p.scdn.co/mp3-preview/3da874902a1076518f0d53347dd9638b154339e5?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0tDC3KJPPu5eonGTtCURpq"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:17:39Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6YvP6AXefuZ3bROoEVjCiY"
              },
              "href": "https://api.spotify.com/v1/artists/6YvP6AXefuZ3bROoEVjCiY",
              "id": "6YvP6AXefuZ3bROoEVjCiY",
              "name": "LISTENBEE",
              "type": "artist",
              "uri": "spotify:artist:6YvP6AXefuZ3bROoEVjCiY"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1P13yMkVBAGy1iXoVwczYl"
          },
          "href": "https://api.spotify.com/v1/albums/1P13yMkVBAGy1iXoVwczYl",
          "id": "1P13yMkVBAGy1iXoVwczYl",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738b5b234f1aea6e1fac50d7cc",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028b5b234f1aea6e1fac50d7cc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518b5b234f1aea6e1fac50d7cc",
              "width": 64
            }
          ],
          "name": "Save Me",
          "release_date": "2015-01-16",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:1P13yMkVBAGy1iXoVwczYl"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6YvP6AXefuZ3bROoEVjCiY"
            },
            "href": "https://api.spotify.com/v1/artists/6YvP6AXefuZ3bROoEVjCiY",
            "id": "6YvP6AXefuZ3bROoEVjCiY",
            "name": "LISTENBEE",
            "type": "artist",
            "uri": "spotify:artist:6YvP6AXefuZ3bROoEVjCiY"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2Ohz3BAbalahBYLuM836cd"
            },
            "href": "https://api.spotify.com/v1/artists/2Ohz3BAbalahBYLuM836cd",
            "id": "2Ohz3BAbalahBYLuM836cd",
            "name": "Naz Tokio",
            "type": "artist",
            "uri": "spotify:artist:2Ohz3BAbalahBYLuM836cd"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 210706,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "DEE861400837"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1Qg0JhbqPhYki1a5bv7NgH"
        },
        "href": "https://api.spotify.com/v1/tracks/1Qg0JhbqPhYki1a5bv7NgH",
        "id": "1Qg0JhbqPhYki1a5bv7NgH",
        "is_local": false,
        "name": "Save Me",
        "popularity": 61,
        "preview_url": "https://p.scdn.co/mp3-preview/b99950aaece99198f388f11f6143045978e04072?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1Qg0JhbqPhYki1a5bv7NgH"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:18:18Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4hbnUamwrCHpv4wQTwvCIc"
              },
              "href": "https://api.spotify.com/v1/artists/4hbnUamwrCHpv4wQTwvCIc",
              "id": "4hbnUamwrCHpv4wQTwvCIc",
              "name": "Sondr",
              "type": "artist",
              "uri": "spotify:artist:4hbnUamwrCHpv4wQTwvCIc"
            }
          ],
          "available_markets": [
            "AE",
            "AT",
            "BG",
            "BH",
            "CH",
            "DE",
            "DK",
            "EG",
            "ID",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "MT",
            "MY",
            "NO",
            "OM",
            "PH",
            "PL",
            "PS",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "TR",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4IzgtGmj7ELr53s4WbXRwp"
          },
          "href": "https://api.spotify.com/v1/albums/4IzgtGmj7ELr53s4WbXRwp",
          "id": "4IzgtGmj7ELr53s4WbXRwp",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733dc27bbbb20ba8d30a625691",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023dc27bbbb20ba8d30a625691",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513dc27bbbb20ba8d30a625691",
              "width": 64
            }
          ],
          "name": "Surviving (feat. Joe Cleere)",
          "release_date": "2016-03-28",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:4IzgtGmj7ELr53s4WbXRwp"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4hbnUamwrCHpv4wQTwvCIc"
            },
            "href": "https://api.spotify.com/v1/artists/4hbnUamwrCHpv4wQTwvCIc",
            "id": "4hbnUamwrCHpv4wQTwvCIc",
            "name": "Sondr",
            "type": "artist",
            "uri": "spotify:artist:4hbnUamwrCHpv4wQTwvCIc"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6P4CBsjZN4ZsBfMnBMYFCA"
            },
            "href": "https://api.spotify.com/v1/artists/6P4CBsjZN4ZsBfMnBMYFCA",
            "id": "6P4CBsjZN4ZsBfMnBMYFCA",
            "name": "Joe Cleere",
            "type": "artist",
            "uri": "spotify:artist:6P4CBsjZN4ZsBfMnBMYFCA"
          }
        ],
        "available_markets": [
          "AE",
          "AT",
          "BG",
          "BH",
          "CH",
          "DE",
          "DK",
          "EG",
          "ID",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "MT",
          "MY",
          "NO",
          "OM",
          "PH",
          "PL",
          "PS",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "TR",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 213222,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USUS11600174"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/40TogYyqoENkImGSObxjyb"
        },
        "href": "https://api.spotify.com/v1/tracks/40TogYyqoENkImGSObxjyb",
        "id": "40TogYyqoENkImGSObxjyb",
        "is_local": false,
        "name": "Surviving (feat. Joe Cleere)",
        "popularity": 49,
        "preview_url": "https://p.scdn.co/mp3-preview/b481ae25ed6b37f97b592e03ec9ab4d89dc7a3b5?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:40TogYyqoENkImGSObxjyb"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:18:57Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
              },
              "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
              "id": "7vk5e3vY1uw9plTHJAMwjN",
              "name": "Alan Walker",
              "type": "artist",
              "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1eMmoIprPDWeFdB1FxU6ZV"
              },
              "href": "https://api.spotify.com/v1/artists/1eMmoIprPDWeFdB1FxU6ZV",
              "id": "1eMmoIprPDWeFdB1FxU6ZV",
              "name": "Au/Ra",
              "type": "artist",
              "uri": "spotify:artist:1eMmoIprPDWeFdB1FxU6ZV"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6064pL9Hu3Wx2bwJMeOx6o"
              },
              "href": "https://api.spotify.com/v1/artists/6064pL9Hu3Wx2bwJMeOx6o",
              "id": "6064pL9Hu3Wx2bwJMeOx6o",
              "name": "Tomine Harket",
              "type": "artist",
              "uri": "spotify:artist:6064pL9Hu3Wx2bwJMeOx6o"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/64WDoAGyTcPlSIFAiSDsB0"
          },
          "href": "https://api.spotify.com/v1/albums/64WDoAGyTcPlSIFAiSDsB0",
          "id": "64WDoAGyTcPlSIFAiSDsB0",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273e01e9da93772e7cb0ed657ce",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02e01e9da93772e7cb0ed657ce",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851e01e9da93772e7cb0ed657ce",
              "width": 64
            }
          ],
          "name": "Darkside",
          "release_date": "2018-07-27",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:64WDoAGyTcPlSIFAiSDsB0"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
            },
            "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
            "id": "7vk5e3vY1uw9plTHJAMwjN",
            "name": "Alan Walker",
            "type": "artist",
            "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1eMmoIprPDWeFdB1FxU6ZV"
            },
            "href": "https://api.spotify.com/v1/artists/1eMmoIprPDWeFdB1FxU6ZV",
            "id": "1eMmoIprPDWeFdB1FxU6ZV",
            "name": "Au/Ra",
            "type": "artist",
            "uri": "spotify:artist:1eMmoIprPDWeFdB1FxU6ZV"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6064pL9Hu3Wx2bwJMeOx6o"
            },
            "href": "https://api.spotify.com/v1/artists/6064pL9Hu3Wx2bwJMeOx6o",
            "id": "6064pL9Hu3Wx2bwJMeOx6o",
            "name": "Tomine Harket",
            "type": "artist",
            "uri": "spotify:artist:6064pL9Hu3Wx2bwJMeOx6o"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 211866,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "NOG841806010"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1snWlbcbgQpJfknoI30DWG"
        },
        "href": "https://api.spotify.com/v1/tracks/1snWlbcbgQpJfknoI30DWG",
        "id": "1snWlbcbgQpJfknoI30DWG",
        "is_local": false,
        "name": "Darkside",
        "popularity": 73,
        "preview_url": "https://p.scdn.co/mp3-preview/d741d3266cf14fe61fecfce1e22362aa81a6054c?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1snWlbcbgQpJfknoI30DWG"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:19:34Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4S8NmgM7oJ188sKp1waZpy"
              },
              "href": "https://api.spotify.com/v1/artists/4S8NmgM7oJ188sKp1waZpy",
              "id": "4S8NmgM7oJ188sKp1waZpy",
              "name": "Möwe",
              "type": "artist",
              "uri": "spotify:artist:4S8NmgM7oJ188sKp1waZpy"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0IHRNvSnQan6KNZQgupPvP"
          },
          "href": "https://api.spotify.com/v1/albums/0IHRNvSnQan6KNZQgupPvP",
          "id": "0IHRNvSnQan6KNZQgupPvP",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273fe552f1d1e049368eaf08d0a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02fe552f1d1e049368eaf08d0a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851fe552f1d1e049368eaf08d0a",
              "width": 64
            }
          ],
          "name": "Skyline",
          "release_date": "2017-05-19",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:0IHRNvSnQan6KNZQgupPvP"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4S8NmgM7oJ188sKp1waZpy"
            },
            "href": "https://api.spotify.com/v1/artists/4S8NmgM7oJ188sKp1waZpy",
            "id": "4S8NmgM7oJ188sKp1waZpy",
            "name": "Möwe",
            "type": "artist",
            "uri": "spotify:artist:4S8NmgM7oJ188sKp1waZpy"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 163947,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "DK4YA1705401"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0HkwDCJIbWijtfKg63gQBJ"
        },
        "href": "https://api.spotify.com/v1/tracks/0HkwDCJIbWijtfKg63gQBJ",
        "id": "0HkwDCJIbWijtfKg63gQBJ",
        "is_local": false,
        "name": "Skyline",
        "popularity": 59,
        "preview_url": "https://p.scdn.co/mp3-preview/776990e0bc2a648888b8264204087ad8bbab6b7b?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0HkwDCJIbWijtfKg63gQBJ"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:19:42Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7keGfmQR4X5w0two1xKZ7d"
              },
              "href": "https://api.spotify.com/v1/artists/7keGfmQR4X5w0two1xKZ7d",
              "id": "7keGfmQR4X5w0two1xKZ7d",
              "name": "Kungs",
              "type": "artist",
              "uri": "spotify:artist:7keGfmQR4X5w0two1xKZ7d"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/66KCBRiOFSs9bki2A15WlB"
          },
          "href": "https://api.spotify.com/v1/albums/66KCBRiOFSs9bki2A15WlB",
          "id": "66KCBRiOFSs9bki2A15WlB",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/c34682c82dfee5cab9bfa6788fd1ad81b31c4424",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/4b9812f26c5ebd50056daf3e0796993ab87a8af0",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/90336fe8cf6936bb829c9efcc666c26bee3253a8",
              "width": 64
            }
          ],
          "name": "Layers",
          "release_date": "2016-11-04",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:66KCBRiOFSs9bki2A15WlB"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7keGfmQR4X5w0two1xKZ7d"
            },
            "href": "https://api.spotify.com/v1/artists/7keGfmQR4X5w0two1xKZ7d",
            "id": "7keGfmQR4X5w0two1xKZ7d",
            "name": "Kungs",
            "type": "artist",
            "uri": "spotify:artist:7keGfmQR4X5w0two1xKZ7d"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/726MxZBpkxnnoKl6aN7mmj"
            },
            "href": "https://api.spotify.com/v1/artists/726MxZBpkxnnoKl6aN7mmj",
            "id": "726MxZBpkxnnoKl6aN7mmj",
            "name": "Cookin' On 3 Burners",
            "type": "artist",
            "uri": "spotify:artist:726MxZBpkxnnoKl6aN7mmj"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 195546,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "FR9W11601798"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1A8j067qyiNwQnZT0bzUpZ"
        },
        "href": "https://api.spotify.com/v1/tracks/1A8j067qyiNwQnZT0bzUpZ",
        "id": "1A8j067qyiNwQnZT0bzUpZ",
        "is_local": false,
        "name": "This Girl (Kungs Vs. Cookin' On 3 Burners)",
        "popularity": 78,
        "preview_url": null,
        "track": true,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:1A8j067qyiNwQnZT0bzUpZ"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:19:48Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2XnBwblw31dfGnspMIwgWz"
              },
              "href": "https://api.spotify.com/v1/artists/2XnBwblw31dfGnspMIwgWz",
              "id": "2XnBwblw31dfGnspMIwgWz",
              "name": "Axwell /\\ Ingrosso",
              "type": "artist",
              "uri": "spotify:artist:2XnBwblw31dfGnspMIwgWz"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1xNmvlEiICkRlRGqlNFZ43"
              },
              "href": "https://api.spotify.com/v1/artists/1xNmvlEiICkRlRGqlNFZ43",
              "id": "1xNmvlEiICkRlRGqlNFZ43",
              "name": "Axwell",
              "type": "artist",
              "uri": "spotify:artist:1xNmvlEiICkRlRGqlNFZ43"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6hyMWrxGBsOx6sWcVj1DqP"
              },
              "href": "https://api.spotify.com/v1/artists/6hyMWrxGBsOx6sWcVj1DqP",
              "id": "6hyMWrxGBsOx6sWcVj1DqP",
              "name": "Sebastian Ingrosso",
              "type": "artist",
              "uri": "spotify:artist:6hyMWrxGBsOx6sWcVj1DqP"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6Ei5WWek37m1x9AjpSXTcJ"
          },
          "href": "https://api.spotify.com/v1/albums/6Ei5WWek37m1x9AjpSXTcJ",
          "id": "6Ei5WWek37m1x9AjpSXTcJ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/8188e780e8b4a8b351791563c8e7bb4304706f3a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/a65e0493562d0ee5ab7da851dfcfcbe8ec783ee5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/848c678b5dfee1527c09ad202b1deaf0c2eed314",
              "width": 64
            }
          ],
          "name": "More Than You Know",
          "release_date": "2017-07-28",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:6Ei5WWek37m1x9AjpSXTcJ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2XnBwblw31dfGnspMIwgWz"
            },
            "href": "https://api.spotify.com/v1/artists/2XnBwblw31dfGnspMIwgWz",
            "id": "2XnBwblw31dfGnspMIwgWz",
            "name": "Axwell /\\ Ingrosso",
            "type": "artist",
            "uri": "spotify:artist:2XnBwblw31dfGnspMIwgWz"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 203000,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBUM71701735"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6h5PAsRni4IRlxWr6uDPTP"
        },
        "href": "https://api.spotify.com/v1/tracks/6h5PAsRni4IRlxWr6uDPTP",
        "id": "6h5PAsRni4IRlxWr6uDPTP",
        "is_local": false,
        "name": "More Than You Know",
        "popularity": 81,
        "preview_url": null,
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6h5PAsRni4IRlxWr6uDPTP"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:19:56Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1L9i6qZYIGQedgM9QLSyzb"
              },
              "href": "https://api.spotify.com/v1/artists/1L9i6qZYIGQedgM9QLSyzb",
              "id": "1L9i6qZYIGQedgM9QLSyzb",
              "name": "Klingande",
              "type": "artist",
              "uri": "spotify:artist:1L9i6qZYIGQedgM9QLSyzb"
            }
          ],
          "available_markets": [
            "BE",
            "BG",
            "DK",
            "EE",
            "ES",
            "FI",
            "GB",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "LT",
            "LU",
            "LV",
            "MY",
            "NL",
            "NO",
            "PH",
            "PL",
            "RO",
            "SE",
            "SG",
            "TR",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0KI5hL4NZ6BotDvKNZ9BFU"
          },
          "href": "https://api.spotify.com/v1/albums/0KI5hL4NZ6BotDvKNZ9BFU",
          "id": "0KI5hL4NZ6BotDvKNZ9BFU",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738c125ad5fc576c0152a43ea6",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028c125ad5fc576c0152a43ea6",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518c125ad5fc576c0152a43ea6",
              "width": 64
            }
          ],
          "name": "Somewhere New (feat. M-22)",
          "release_date": "2016-08-26",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:0KI5hL4NZ6BotDvKNZ9BFU"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1L9i6qZYIGQedgM9QLSyzb"
            },
            "href": "https://api.spotify.com/v1/artists/1L9i6qZYIGQedgM9QLSyzb",
            "id": "1L9i6qZYIGQedgM9QLSyzb",
            "name": "Klingande",
            "type": "artist",
            "uri": "spotify:artist:1L9i6qZYIGQedgM9QLSyzb"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4WFtYn5RyU8VGPpPyW9Pxw"
            },
            "href": "https://api.spotify.com/v1/artists/4WFtYn5RyU8VGPpPyW9Pxw",
            "id": "4WFtYn5RyU8VGPpPyW9Pxw",
            "name": "M-22",
            "type": "artist",
            "uri": "spotify:artist:4WFtYn5RyU8VGPpPyW9Pxw"
          }
        ],
        "available_markets": [
          "BE",
          "BG",
          "DK",
          "EE",
          "ES",
          "FI",
          "GB",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "LT",
          "LU",
          "LV",
          "MY",
          "NL",
          "NO",
          "PH",
          "PL",
          "RO",
          "SE",
          "SG",
          "TR",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 208137,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "FR9W11612706"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1sfmIZRBmY5yq5wRQs987T"
        },
        "href": "https://api.spotify.com/v1/tracks/1sfmIZRBmY5yq5wRQs987T",
        "id": "1sfmIZRBmY5yq5wRQs987T",
        "is_local": false,
        "name": "Somewhere New (feat. M-22) - Radio Edit",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/c320f826ed38f82e2c051715d1ad3fa5f66815ea?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1sfmIZRBmY5yq5wRQs987T"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:20:09Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
              },
              "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
              "id": "7vk5e3vY1uw9plTHJAMwjN",
              "name": "Alan Walker",
              "type": "artist",
              "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5HMjpBO0v78ayq5lreAyDd"
          },
          "href": "https://api.spotify.com/v1/albums/5HMjpBO0v78ayq5lreAyDd",
          "id": "5HMjpBO0v78ayq5lreAyDd",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c4d00cac55ae1b4598c9bc90",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c4d00cac55ae1b4598c9bc90",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c4d00cac55ae1b4598c9bc90",
              "width": 64
            }
          ],
          "name": "Faded",
          "release_date": "2015-12-04",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:5HMjpBO0v78ayq5lreAyDd"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
            },
            "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
            "id": "7vk5e3vY1uw9plTHJAMwjN",
            "name": "Alan Walker",
            "type": "artist",
            "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 212626,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "NOG841549010"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7gHs73wELdeycvS48JfIos"
        },
        "href": "https://api.spotify.com/v1/tracks/7gHs73wELdeycvS48JfIos",
        "id": "7gHs73wELdeycvS48JfIos",
        "is_local": false,
        "name": "Faded",
        "popularity": 78,
        "preview_url": "https://p.scdn.co/mp3-preview/224777f7277a3a2259723b8fee826e67d3213df9?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7gHs73wELdeycvS48JfIos"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:20:43Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4cSYNpczcvTUpnPMFDLsIc"
              },
              "href": "https://api.spotify.com/v1/artists/4cSYNpczcvTUpnPMFDLsIc",
              "id": "4cSYNpczcvTUpnPMFDLsIc",
              "name": "Tungevaag & Raaban",
              "type": "artist",
              "uri": "spotify:artist:4cSYNpczcvTUpnPMFDLsIc"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7HIBYcRPuix4vb4C3d6F0C"
          },
          "href": "https://api.spotify.com/v1/albums/7HIBYcRPuix4vb4C3d6F0C",
          "id": "7HIBYcRPuix4vb4C3d6F0C",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733912082a6dc09c91bc9cdaf6",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023912082a6dc09c91bc9cdaf6",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513912082a6dc09c91bc9cdaf6",
              "width": 64
            }
          ],
          "name": "All For Love",
          "release_date": "2018-03-23",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:7HIBYcRPuix4vb4C3d6F0C"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4cSYNpczcvTUpnPMFDLsIc"
            },
            "href": "https://api.spotify.com/v1/artists/4cSYNpczcvTUpnPMFDLsIc",
            "id": "4cSYNpczcvTUpnPMFDLsIc",
            "name": "Tungevaag & Raaban",
            "type": "artist",
            "uri": "spotify:artist:4cSYNpczcvTUpnPMFDLsIc"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/49CE2ffZ6Z3zeYSDauSKck"
            },
            "href": "https://api.spotify.com/v1/artists/49CE2ffZ6Z3zeYSDauSKck",
            "id": "49CE2ffZ6Z3zeYSDauSKck",
            "name": "Tungevaag",
            "type": "artist",
            "uri": "spotify:artist:49CE2ffZ6Z3zeYSDauSKck"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4Zx0uXFNMjp95J8cU9J9kJ"
            },
            "href": "https://api.spotify.com/v1/artists/4Zx0uXFNMjp95J8cU9J9kJ",
            "id": "4Zx0uXFNMjp95J8cU9J9kJ",
            "name": "Raaban",
            "type": "artist",
            "uri": "spotify:artist:4Zx0uXFNMjp95J8cU9J9kJ"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1ZDET5tZjBIjNBb7WIqGTw"
            },
            "href": "https://api.spotify.com/v1/artists/1ZDET5tZjBIjNBb7WIqGTw",
            "id": "1ZDET5tZjBIjNBb7WIqGTw",
            "name": "Richard Smitt",
            "type": "artist",
            "uri": "spotify:artist:1ZDET5tZjBIjNBb7WIqGTw"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 180484,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "SEPQA1800095"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5VGBgPVFO3e0lWz4WHYntQ"
        },
        "href": "https://api.spotify.com/v1/tracks/5VGBgPVFO3e0lWz4WHYntQ",
        "id": "5VGBgPVFO3e0lWz4WHYntQ",
        "is_local": false,
        "name": "All For Love",
        "popularity": 70,
        "preview_url": "https://p.scdn.co/mp3-preview/981b75139d13469630a8025d2b9cc8d0d0ea9234?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5VGBgPVFO3e0lWz4WHYntQ"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:21:14Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1L9i6qZYIGQedgM9QLSyzb"
              },
              "href": "https://api.spotify.com/v1/artists/1L9i6qZYIGQedgM9QLSyzb",
              "id": "1L9i6qZYIGQedgM9QLSyzb",
              "name": "Klingande",
              "type": "artist",
              "uri": "spotify:artist:1L9i6qZYIGQedgM9QLSyzb"
            }
          ],
          "available_markets": [
            "AE",
            "AR",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CL",
            "CO",
            "CR",
            "DK",
            "DO",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "GB",
            "GT",
            "HN",
            "ID",
            "IE",
            "IL",
            "IS",
            "JO",
            "KW",
            "LB",
            "LT",
            "LU",
            "LV",
            "MX",
            "MY",
            "NI",
            "NL",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PY",
            "QA",
            "RO",
            "SA",
            "SG",
            "SV",
            "TH",
            "TR",
            "UY"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2MPjUrXc98DsMXGGiiK9jy"
          },
          "href": "https://api.spotify.com/v1/albums/2MPjUrXc98DsMXGGiiK9jy",
          "id": "2MPjUrXc98DsMXGGiiK9jy",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732dbc733a3922349cb5d8edee",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022dbc733a3922349cb5d8edee",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512dbc733a3922349cb5d8edee",
              "width": 64
            }
          ],
          "name": "Losing U",
          "release_date": "2016-02-26",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:2MPjUrXc98DsMXGGiiK9jy"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1L9i6qZYIGQedgM9QLSyzb"
            },
            "href": "https://api.spotify.com/v1/artists/1L9i6qZYIGQedgM9QLSyzb",
            "id": "1L9i6qZYIGQedgM9QLSyzb",
            "name": "Klingande",
            "type": "artist",
            "uri": "spotify:artist:1L9i6qZYIGQedgM9QLSyzb"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/66bRetZ7cnvkGzNmFqE9Ws"
            },
            "href": "https://api.spotify.com/v1/artists/66bRetZ7cnvkGzNmFqE9Ws",
            "id": "66bRetZ7cnvkGzNmFqE9Ws",
            "name": "Daylight",
            "type": "artist",
            "uri": "spotify:artist:66bRetZ7cnvkGzNmFqE9Ws"
          }
        ],
        "available_markets": [
          "AE",
          "AR",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CL",
          "CO",
          "CR",
          "DK",
          "DO",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "GB",
          "GT",
          "HN",
          "ID",
          "IE",
          "IL",
          "IS",
          "JO",
          "KW",
          "LB",
          "LT",
          "LU",
          "LV",
          "MX",
          "MY",
          "NI",
          "NL",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PY",
          "QA",
          "RO",
          "SA",
          "SG",
          "SV",
          "TH",
          "TR",
          "UY"
        ],
        "disc_number": 1,
        "duration_ms": 217015,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "FR9W11601712"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1rsn0LRt5IpGp9a2KC5bTW"
        },
        "href": "https://api.spotify.com/v1/tracks/1rsn0LRt5IpGp9a2KC5bTW",
        "id": "1rsn0LRt5IpGp9a2KC5bTW",
        "is_local": false,
        "name": "Losing U",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/c815d7f206adc4841e84b4fc9442a1123442740b?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1rsn0LRt5IpGp9a2KC5bTW"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:22:22Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5WdqBAQhGFCrZvBKXiPIu7"
              },
              "href": "https://api.spotify.com/v1/artists/5WdqBAQhGFCrZvBKXiPIu7",
              "id": "5WdqBAQhGFCrZvBKXiPIu7",
              "name": "The Him",
              "type": "artist",
              "uri": "spotify:artist:5WdqBAQhGFCrZvBKXiPIu7"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1u3ETW11Uysr6UF6din8CG"
          },
          "href": "https://api.spotify.com/v1/albums/1u3ETW11Uysr6UF6din8CG",
          "id": "1u3ETW11Uysr6UF6din8CG",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/93aee2a72c055a156899d43bd82943f36c221393",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/edc768e13dcaae97e12a84ea47cb8c93ae76610d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/90cb40db79e857536b34dca17cd2b07c22e154ae",
              "width": 64
            }
          ],
          "name": "Always",
          "release_date": "2017-11-10",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:1u3ETW11Uysr6UF6din8CG"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5WdqBAQhGFCrZvBKXiPIu7"
            },
            "href": "https://api.spotify.com/v1/artists/5WdqBAQhGFCrZvBKXiPIu7",
            "id": "5WdqBAQhGFCrZvBKXiPIu7",
            "name": "The Him",
            "type": "artist",
            "uri": "spotify:artist:5WdqBAQhGFCrZvBKXiPIu7"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 193103,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "NLL4S1700012"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5poevcmYCOZ8uZQnUuOPxC"
        },
        "href": "https://api.spotify.com/v1/tracks/5poevcmYCOZ8uZQnUuOPxC",
        "id": "5poevcmYCOZ8uZQnUuOPxC",
        "is_local": false,
        "name": "Always",
        "popularity": 58,
        "preview_url": "https://p.scdn.co/mp3-preview/7569415763914c7a47f6ef7c60c615f15d828699?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5poevcmYCOZ8uZQnUuOPxC"
      },
      "video_thumbnail": {
        "url": null
      }
    },
    {
      "added_at": "2018-08-11T12:24:27Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/21t64rkd4a6ykxmin5ahgpj4q"
        },
        "href": "https://api.spotify.com/v1/users/21t64rkd4a6ykxmin5ahgpj4q",
        "id": "21t64rkd4a6ykxmin5ahgpj4q",
        "type": "user",
        "uri": "spotify:user:21t64rkd4a6ykxmin5ahgpj4q"
      },
      "is_local": false,
      "primary_color": null,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6MDME20pz9RveH9rEXvrOM"
              },
              "href": "https://api.spotify.com/v1/artists/6MDME20pz9RveH9rEXvrOM",
              "id": "6MDME20pz9RveH9rEXvrOM",
              "name": "Clean Bandit",
              "type": "artist",
              "uri": "spotify:artist:6MDME20pz9RveH9rEXvrOM"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6S2OmqARrzebs0tKUEyXyp"
              },
              "href": "https://api.spotify.com/v1/artists/6S2OmqARrzebs0tKUEyXyp",
              "id": "6S2OmqARrzebs0tKUEyXyp",
              "name": "Demi Lovato",
              "type": "artist",
              "uri": "spotify:artist:6S2OmqARrzebs0tKUEyXyp"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1q7a5wZeti0neU2jDn8Dz3"
          },
          "href": "https://api.spotify.com/v1/albums/1q7a5wZeti0neU2jDn8Dz3",
          "id": "1q7a5wZeti0neU2jDn8Dz3",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27367eda217860e86c43481a5cb",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0267eda217860e86c43481a5cb",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485167eda217860e86c43481a5cb",
              "width": 64
            }
          ],
          "name": "Solo (feat. Demi Lovato)",
          "release_date": "2018-05-17",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:1q7a5wZeti0neU2jDn8Dz3"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6MDME20pz9RveH9rEXvrOM"
            },
            "href": "https://api.spotify.com/v1/artists/6MDME20pz9RveH9rEXvrOM",
            "id": "6MDME20pz9RveH9rEXvrOM",
            "name": "Clean Bandit",
            "type": "artist",
            "uri": "spotify:artist:6MDME20pz9RveH9rEXvrOM"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6S2OmqARrzebs0tKUEyXyp"
            },
            "href": "https://api.spotify.com/v1/artists/6S2OmqARrzebs0tKUEyXyp",
            "id": "6S2OmqARrzebs0tKUEyXyp",
            "name": "Demi Lovato",
            "type": "artist",
            "uri": "spotify:artist:6S2OmqARrzebs0tKUEyXyp"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 222653,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAHS1800328"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6kPJZM97LwdG9QIsT7khp6"
        },
        "href": "https://api.spotify.com/v1/tracks/6kPJZM97LwdG9QIsT7khp6",
        "id": "6kPJZM97LwdG9QIsT7khp6",
        "is_local": false,
        "name": "Solo (feat. Demi Lovato)",
        "popularity": 81,
        "preview_url": "https://p.scdn.co/mp3-preview/ccfd1b80223079c120eeec6e83c7771eb74ca27d?cid=025f670fd50543faa0e4b5478fedc6ce",
        "track": true,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6kPJZM97LwdG9QIsT7khp6"
      },
      "video_thumbnail": {
        "url": null
      }
    }
  ],
  "limit": 100,
  "next": null,
  "offset": 0,
  "previous": null,
  "total": 21
};

const buildRequestMetaData = (method, ACCESS_TOKEN_JWT, body) =>{
   return {
     method: method,
     headers: new Headers({
         'Authorization': 'Bearer ' + ACCESS_TOKEN_JWT,
         'Accept': 'application/json',
         'Content-Type': 'application/json',
     })
   };
};

const buildRequestData = (method, JWT, body) => {
    validateEmptyJWT(JWT);
    return buildRequestMetaData(method, JWT, body);
};

const handleStatus = (response) => {
    const apiMessage = (response) => {
      return " -- API message : " + response.message;
    };
    if(response && response.status === 401){
     throw new Error(STATUS_401_ERROR_MESSAGE + apiMessage(response));
    }
    if(response && response.status === 400){
     throw new Error(STATUS_400_ERROR_MESSAGE + apiMessage(response));
    }
    if(response && response.status === 403){
       throw new Error(STATUS_403_ERROR_MESSAGE + apiMessage(response));
    }
    if(response && response.status === 500){
     throw new Error(STATUS_500_ERROR_MESSAGE + apiMessage(response));
    }
    if(response && response.status === 504){
     throw new Error(STATUS_504_ERROR_MESSAGE + apiMessage(response));
    }
};

const consumeApi = async (endPoint, method, JWT, mockData, mockOverride, body) =>{
  let response = null;
  let json = null;
  if ( MOCK_ALL_DATA || mockOverride){
    console.log(`MOCK_ALL_DATA active for method ${method.toUpperCase()} in endpoint: ${endPoint}`);
    json = mockData;
  } else {
    if(isValidSession()){
      try{
        // Only call to api if we we have a valid session.
        response = await fetch(endPoint, buildRequestData(method, JWT, body));
        handleStatus(response);
        json = await response.json();
      } catch (e) {
        throw "Invalid session token try to login again.";
      }
    }
  }
  return json;
};

export const getUserPlayListApi = async (JWT) => {
    const END_POINT = BASE_END_POINT + USER_PLAYLIST_END_POINT ;
    return consumeApi(END_POINT, METHOD_GET, JWT, playlistsMockData, false, {}, false);
};

export const getPlayListTracksApi = async (JWT, playlistId) => {
    const END_POINT = BASE_END_POINT + PLAYLIST_END_POINT + "/"+ playlistId + PLAYLIST_TRACKS_END_POINT;
    return consumeApi(END_POINT, METHOD_GET, JWT, playlistTracksMockData, false, {}, false);
};

