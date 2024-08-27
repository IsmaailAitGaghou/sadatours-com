<?php
/**
 * Countries related constants.
 *
 * @package WPTravelEngine/Constants
 * @since 6.0.0
 */

namespace WPTravelEngine\Helpers;

/**
 * Class Countries
 * Constants for countries.
 *
 * @since 6.0.0
 */
class Countries {
	/**
	 * List of countries.
	 *
	 * @return array
	 */
	public static function list(): array {
		return array(
			'AF' => __( 'Afghanistan', 'wp-travel-engine' ),
			'AX' => __( 'Åland Islands', 'wp-travel-engine' ),
			'AL' => __( 'Albania', 'wp-travel-engine' ),
			'DZ' => __( 'Algeria', 'wp-travel-engine' ),
			'AS' => __( 'American Samoa', 'wp-travel-engine' ),
			'AD' => __( 'Andorra', 'wp-travel-engine' ),
			'AO' => __( 'Angola', 'wp-travel-engine' ),
			'AI' => __( 'Anguilla', 'wp-travel-engine' ),
			'AQ' => __( 'Antarctica', 'wp-travel-engine' ),
			'AG' => __( 'Antigua and Barbuda', 'wp-travel-engine' ),
			'AR' => __( 'Argentina', 'wp-travel-engine' ),
			'AM' => __( 'Armenia', 'wp-travel-engine' ),
			'AW' => __( 'Aruba', 'wp-travel-engine' ),
			'AU' => __( 'Australia', 'wp-travel-engine' ),
			'AT' => __( 'Austria', 'wp-travel-engine' ),
			'AZ' => __( 'Azerbaijan', 'wp-travel-engine' ),
			'BS' => __( 'Bahamas', 'wp-travel-engine' ),
			'BH' => __( 'Bahrain', 'wp-travel-engine' ),
			'BD' => __( 'Bangladesh', 'wp-travel-engine' ),
			'BB' => __( 'Barbados', 'wp-travel-engine' ),
			'BY' => __( 'Belarus', 'wp-travel-engine' ),
			'BE' => __( 'Belgium', 'wp-travel-engine' ),
			'PW' => __( 'Belau', 'wp-travel-engine' ),
			'BZ' => __( 'Belize', 'wp-travel-engine' ),
			'BJ' => __( 'Benin', 'wp-travel-engine' ),
			'BM' => __( 'Bermuda', 'wp-travel-engine' ),
			'BT' => __( 'Bhutan', 'wp-travel-engine' ),
			'BO' => __( 'Bolivia', 'wp-travel-engine' ),
			'BQ' => __( 'Bonaire, Saint Eustatius and Saba', 'wp-travel-engine' ),
			'BA' => __( 'Bosnia and Herzegovina', 'wp-travel-engine' ),
			'BW' => __( 'Botswana', 'wp-travel-engine' ),
			'BV' => __( 'Bouvet Island', 'wp-travel-engine' ),
			'BR' => __( 'Brazil', 'wp-travel-engine' ),
			'IO' => __( 'British Indian Ocean Territory', 'wp-travel-engine' ),
			'BN' => __( 'Brunei', 'wp-travel-engine' ),
			'BG' => __( 'Bulgaria', 'wp-travel-engine' ),
			'BF' => __( 'Burkina Faso', 'wp-travel-engine' ),
			'BI' => __( 'Burundi', 'wp-travel-engine' ),
			'KH' => __( 'Cambodia', 'wp-travel-engine' ),
			'CM' => __( 'Cameroon', 'wp-travel-engine' ),
			'CA' => __( 'Canada', 'wp-travel-engine' ),
			'CV' => __( 'Cape Verde', 'wp-travel-engine' ),
			'KY' => __( 'Cayman Islands', 'wp-travel-engine' ),
			'CF' => __( 'Central African Republic', 'wp-travel-engine' ),
			'TD' => __( 'Chad', 'wp-travel-engine' ),
			'CL' => __( 'Chile', 'wp-travel-engine' ),
			'CN' => __( 'China', 'wp-travel-engine' ),
			'CX' => __( 'Christmas Island', 'wp-travel-engine' ),
			'CC' => __( 'Cocos (Keeling) Islands', 'wp-travel-engine' ),
			'CO' => __( 'Colombia', 'wp-travel-engine' ),
			'KM' => __( 'Comoros', 'wp-travel-engine' ),
			'CG' => __( 'Congo (Brazzaville)', 'wp-travel-engine' ),
			'CD' => __( 'Congo (Kinshasa)', 'wp-travel-engine' ),
			'CK' => __( 'Cook Islands', 'wp-travel-engine' ),
			'CR' => __( 'Costa Rica', 'wp-travel-engine' ),
			'HR' => __( 'Croatia', 'wp-travel-engine' ),
			'CU' => __( 'Cuba', 'wp-travel-engine' ),
			'CW' => __( 'Cura&ccedil;ao', 'wp-travel-engine' ),
			'CY' => __( 'Cyprus', 'wp-travel-engine' ),
			'CZ' => __( 'Czech Republic', 'wp-travel-engine' ),
			'DK' => __( 'Denmark', 'wp-travel-engine' ),
			'DJ' => __( 'Djibouti', 'wp-travel-engine' ),
			'DM' => __( 'Dominica', 'wp-travel-engine' ),
			'DO' => __( 'Dominican Republic', 'wp-travel-engine' ),
			'EC' => __( 'Ecuador', 'wp-travel-engine' ),
			'EG' => __( 'Egypt', 'wp-travel-engine' ),
			'SV' => __( 'El Salvador', 'wp-travel-engine' ),
			'GQ' => __( 'Equatorial Guinea', 'wp-travel-engine' ),
			'ER' => __( 'Eritrea', 'wp-travel-engine' ),
			'EE' => __( 'Estonia', 'wp-travel-engine' ),
			'ET' => __( 'Ethiopia', 'wp-travel-engine' ),
			'FK' => __( 'Falkland Islands', 'wp-travel-engine' ),
			'FO' => __( 'Faroe Islands', 'wp-travel-engine' ),
			'FJ' => __( 'Fiji', 'wp-travel-engine' ),
			'FI' => __( 'Finland', 'wp-travel-engine' ),
			'FR' => __( 'France', 'wp-travel-engine' ),
			'GF' => __( 'French Guiana', 'wp-travel-engine' ),
			'PF' => __( 'French Polynesia', 'wp-travel-engine' ),
			'TF' => __( 'French Southern Territories', 'wp-travel-engine' ),
			'GA' => __( 'Gabon', 'wp-travel-engine' ),
			'GM' => __( 'Gambia', 'wp-travel-engine' ),
			'GE' => __( 'Georgia', 'wp-travel-engine' ),
			'DE' => __( 'Germany', 'wp-travel-engine' ),
			'GH' => __( 'Ghana', 'wp-travel-engine' ),
			'GI' => __( 'Gibraltar', 'wp-travel-engine' ),
			'GR' => __( 'Greece', 'wp-travel-engine' ),
			'GL' => __( 'Greenland', 'wp-travel-engine' ),
			'GD' => __( 'Grenada', 'wp-travel-engine' ),
			'GP' => __( 'Guadeloupe', 'wp-travel-engine' ),
			'GU' => __( 'Guam', 'wp-travel-engine' ),
			'GT' => __( 'Guatemala', 'wp-travel-engine' ),
			'GG' => __( 'Guernsey', 'wp-travel-engine' ),
			'GN' => __( 'Guinea', 'wp-travel-engine' ),
			'GW' => __( 'Guinea-Bissau', 'wp-travel-engine' ),
			'GY' => __( 'Guyana', 'wp-travel-engine' ),
			'HT' => __( 'Haiti', 'wp-travel-engine' ),
			'HM' => __( 'Heard Island and McDonald Islands', 'wp-travel-engine' ),
			'HN' => __( 'Honduras', 'wp-travel-engine' ),
			'HK' => __( 'Hong Kong', 'wp-travel-engine' ),
			'HU' => __( 'Hungary', 'wp-travel-engine' ),
			'IS' => __( 'Iceland', 'wp-travel-engine' ),
			'IN' => __( 'India', 'wp-travel-engine' ),
			'ID' => __( 'Indonesia', 'wp-travel-engine' ),
			'IR' => __( 'Iran', 'wp-travel-engine' ),
			'IQ' => __( 'Iraq', 'wp-travel-engine' ),
			'IE' => __( 'Ireland', 'wp-travel-engine' ),
			'IM' => __( 'Isle of Man', 'wp-travel-engine' ),
			'IL' => __( 'Israel', 'wp-travel-engine' ),
			'IT' => __( 'Italy', 'wp-travel-engine' ),
			'CI' => __( 'Ivory Coast', 'wp-travel-engine' ),
			'JM' => __( 'Jamaica', 'wp-travel-engine' ),
			'JP' => __( 'Japan', 'wp-travel-engine' ),
			'JE' => __( 'Jersey', 'wp-travel-engine' ),
			'JO' => __( 'Jordan', 'wp-travel-engine' ),
			'KZ' => __( 'Kazakhstan', 'wp-travel-engine' ),
			'KE' => __( 'Kenya', 'wp-travel-engine' ),
			'KI' => __( 'Kiribati', 'wp-travel-engine' ),
			'KW' => __( 'Kuwait', 'wp-travel-engine' ),
			'KG' => __( 'Kyrgyzstan', 'wp-travel-engine' ),
			'LA' => __( 'Laos', 'wp-travel-engine' ),
			'LV' => __( 'Latvia', 'wp-travel-engine' ),
			'LB' => __( 'Lebanon', 'wp-travel-engine' ),
			'LS' => __( 'Lesotho', 'wp-travel-engine' ),
			'LR' => __( 'Liberia', 'wp-travel-engine' ),
			'LY' => __( 'Libya', 'wp-travel-engine' ),
			'LI' => __( 'Liechtenstein', 'wp-travel-engine' ),
			'LT' => __( 'Lithuania', 'wp-travel-engine' ),
			'LU' => __( 'Luxembourg', 'wp-travel-engine' ),
			'MO' => __( 'Macao', 'wp-travel-engine' ),
			'MK' => __( 'North Macedonia', 'wp-travel-engine' ),
			'MG' => __( 'Madagascar', 'wp-travel-engine' ),
			'MW' => __( 'Malawi', 'wp-travel-engine' ),
			'MY' => __( 'Malaysia', 'wp-travel-engine' ),
			'MV' => __( 'Maldives', 'wp-travel-engine' ),
			'ML' => __( 'Mali', 'wp-travel-engine' ),
			'MT' => __( 'Malta', 'wp-travel-engine' ),
			'MH' => __( 'Marshall Islands', 'wp-travel-engine' ),
			'MQ' => __( 'Martinique', 'wp-travel-engine' ),
			'MR' => __( 'Mauritania', 'wp-travel-engine' ),
			'MU' => __( 'Mauritius', 'wp-travel-engine' ),
			'YT' => __( 'Mayotte', 'wp-travel-engine' ),
			'MX' => __( 'Mexico', 'wp-travel-engine' ),
			'FM' => __( 'Micronesia', 'wp-travel-engine' ),
			'MD' => __( 'Moldova', 'wp-travel-engine' ),
			'MC' => __( 'Monaco', 'wp-travel-engine' ),
			'MN' => __( 'Mongolia', 'wp-travel-engine' ),
			'ME' => __( 'Montenegro', 'wp-travel-engine' ),
			'MS' => __( 'Montserrat', 'wp-travel-engine' ),
			'MA' => __( 'Morocco', 'wp-travel-engine' ),
			'MZ' => __( 'Mozambique', 'wp-travel-engine' ),
			'MM' => __( 'Myanmar', 'wp-travel-engine' ),
			'NA' => __( 'Namibia', 'wp-travel-engine' ),
			'NR' => __( 'Nauru', 'wp-travel-engine' ),
			'NP' => __( 'Nepal', 'wp-travel-engine' ),
			'NL' => __( 'Netherlands', 'wp-travel-engine' ),
			'NC' => __( 'New Caledonia', 'wp-travel-engine' ),
			'NZ' => __( 'New Zealand', 'wp-travel-engine' ),
			'NI' => __( 'Nicaragua', 'wp-travel-engine' ),
			'NE' => __( 'Niger', 'wp-travel-engine' ),
			'NG' => __( 'Nigeria', 'wp-travel-engine' ),
			'NU' => __( 'Niue', 'wp-travel-engine' ),
			'NF' => __( 'Norfolk Island', 'wp-travel-engine' ),
			'MP' => __( 'Northern Mariana Islands', 'wp-travel-engine' ),
			'KP' => __( 'North Korea', 'wp-travel-engine' ),
			'NO' => __( 'Norway', 'wp-travel-engine' ),
			'OM' => __( 'Oman', 'wp-travel-engine' ),
			'PK' => __( 'Pakistan', 'wp-travel-engine' ),
			'PS' => __( 'Palestinian Territory', 'wp-travel-engine' ),
			'PA' => __( 'Panama', 'wp-travel-engine' ),
			'PG' => __( 'Papua New Guinea', 'wp-travel-engine' ),
			'PY' => __( 'Paraguay', 'wp-travel-engine' ),
			'PE' => __( 'Peru', 'wp-travel-engine' ),
			'PH' => __( 'Philippines', 'wp-travel-engine' ),
			'PN' => __( 'Pitcairn', 'wp-travel-engine' ),
			'PL' => __( 'Poland', 'wp-travel-engine' ),
			'PT' => __( 'Portugal', 'wp-travel-engine' ),
			'PR' => __( 'Puerto Rico', 'wp-travel-engine' ),
			'QA' => __( 'Qatar', 'wp-travel-engine' ),
			'RE' => __( 'Reunion', 'wp-travel-engine' ),
			'RO' => __( 'Romania', 'wp-travel-engine' ),
			'RU' => __( 'Russia', 'wp-travel-engine' ),
			'RW' => __( 'Rwanda', 'wp-travel-engine' ),
			'BL' => __( 'Saint Barth&eacute;lemy', 'wp-travel-engine' ),
			'SH' => __( 'Saint Helena', 'wp-travel-engine' ),
			'KN' => __( 'Saint Kitts and Nevis', 'wp-travel-engine' ),
			'LC' => __( 'Saint Lucia', 'wp-travel-engine' ),
			'MF' => __( 'Saint Martin (French part)', 'wp-travel-engine' ),
			'SX' => __( 'Saint Martin (Dutch part)', 'wp-travel-engine' ),
			'PM' => __( 'Saint Pierre and Miquelon', 'wp-travel-engine' ),
			'VC' => __( 'Saint Vincent and the Grenadines', 'wp-travel-engine' ),
			'SM' => __( 'San Marino', 'wp-travel-engine' ),
			'ST' => __( 'S&atilde;o Tom&eacute; and Pr&iacute;ncipe', 'wp-travel-engine' ),
			'SA' => __( 'Saudi Arabia', 'wp-travel-engine' ),
			'SN' => __( 'Senegal', 'wp-travel-engine' ),
			'RS' => __( 'Serbia', 'wp-travel-engine' ),
			'SC' => __( 'Seychelles', 'wp-travel-engine' ),
			'SL' => __( 'Sierra Leone', 'wp-travel-engine' ),
			'SG' => __( 'Singapore', 'wp-travel-engine' ),
			'SK' => __( 'Slovakia', 'wp-travel-engine' ),
			'SI' => __( 'Slovenia', 'wp-travel-engine' ),
			'SB' => __( 'Solomon Islands', 'wp-travel-engine' ),
			'SO' => __( 'Somalia', 'wp-travel-engine' ),
			'ZA' => __( 'South Africa', 'wp-travel-engine' ),
			'GS' => __( 'South Georgia/Sandwich Islands', 'wp-travel-engine' ),
			'KR' => __( 'South Korea', 'wp-travel-engine' ),
			'SS' => __( 'South Sudan', 'wp-travel-engine' ),
			'ES' => __( 'Spain', 'wp-travel-engine' ),
			'LK' => __( 'Sri Lanka', 'wp-travel-engine' ),
			'SD' => __( 'Sudan', 'wp-travel-engine' ),
			'SR' => __( 'Suriname', 'wp-travel-engine' ),
			'SJ' => __( 'Svalbard and Jan Mayen', 'wp-travel-engine' ),
			'SZ' => __( 'Swaziland', 'wp-travel-engine' ),
			'SE' => __( 'Sweden', 'wp-travel-engine' ),
			'CH' => __( 'Switzerland', 'wp-travel-engine' ),
			'SY' => __( 'Syria', 'wp-travel-engine' ),
			'TW' => __( 'Taiwan', 'wp-travel-engine' ),
			'TJ' => __( 'Tajikistan', 'wp-travel-engine' ),
			'TZ' => __( 'Tanzania', 'wp-travel-engine' ),
			'TH' => __( 'Thailand', 'wp-travel-engine' ),
			'TL' => __( 'Timor-Leste', 'wp-travel-engine' ),
			'TG' => __( 'Togo', 'wp-travel-engine' ),
			'TK' => __( 'Tokelau', 'wp-travel-engine' ),
			'TO' => __( 'Tonga', 'wp-travel-engine' ),
			'TT' => __( 'Trinidad and Tobago', 'wp-travel-engine' ),
			'TN' => __( 'Tunisia', 'wp-travel-engine' ),
			'TR' => __( 'Turkey', 'wp-travel-engine' ),
			'TM' => __( 'Turkmenistan', 'wp-travel-engine' ),
			'TC' => __( 'Turks and Caicos Islands', 'wp-travel-engine' ),
			'TV' => __( 'Tuvalu', 'wp-travel-engine' ),
			'UG' => __( 'Uganda', 'wp-travel-engine' ),
			'UA' => __( 'Ukraine', 'wp-travel-engine' ),
			'AE' => __( 'United Arab Emirates', 'wp-travel-engine' ),
			'GB' => __( 'United Kingdom (UK)', 'wp-travel-engine' ),
			'US' => __( 'United States (US)', 'wp-travel-engine' ),
			'UM' => __( 'United States (US) Minor Outlying Islands', 'wp-travel-engine' ),
			'UY' => __( 'Uruguay', 'wp-travel-engine' ),
			'UZ' => __( 'Uzbekistan', 'wp-travel-engine' ),
			'VU' => __( 'Vanuatu', 'wp-travel-engine' ),
			'VA' => __( 'Vatican', 'wp-travel-engine' ),
			'VE' => __( 'Venezuela', 'wp-travel-engine' ),
			'VN' => __( 'Vietnam', 'wp-travel-engine' ),
			'VG' => __( 'Virgin Islands (British)', 'wp-travel-engine' ),
			'VI' => __( 'Virgin Islands (US)', 'wp-travel-engine' ),
			'WF' => __( 'Wallis and Futuna', 'wp-travel-engine' ),
			'EH' => __( 'Western Sahara', 'wp-travel-engine' ),
			'WS' => __( 'Samoa', 'wp-travel-engine' ),
			'YE' => __( 'Yemen', 'wp-travel-engine' ),
			'ZM' => __( 'Zambia', 'wp-travel-engine' ),
			'ZW' => __( 'Zimbabwe', 'wp-travel-engine' ),
		);
	}
}
