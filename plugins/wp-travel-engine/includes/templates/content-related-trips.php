<?php
/**
 * Template for related trips.
 *
 * @since __next_version__
 */
$section_title = __( 'Related trips you might interested in', 'wp-travel-engine' );
$related_trips = new \WP_Query();
extract( $args );
?>
<div class="wte-related-trips-wrapper">
	<h2 class="wte-related-trips__heading"><?php echo esc_html( $section_title ); ?></h2>
	<div class="wte-related-trips category-grid wte-d-flex wte-col-3 wpte-trip-list-wrapper">
		<?php
		while ( $related_trips->have_posts() ) {
			$related_trips->the_post();
			$user_wishlists            = wptravelengine_user_wishlists();
			$details                   = wte_get_trip_details( get_the_ID() );
			$related_query             = array(
				'related_query' => true,
			);
			$details                   = array_merge( $details, $related_query );
			$details['user_wishlists'] = $user_wishlists;
			if ( version_compare( '6.0.0', \WP_TRAVEL_ENGINE_VERSION, '<' ) ) {
				wte_get_template( 'content-related-trip.php', $details );
			} else {
				$details['view_mode'] = '';
				wte_get_template( 'content-view.php', $details );
			}
		}
		wp_reset_postdata();
		?>
	</div>
</div>
